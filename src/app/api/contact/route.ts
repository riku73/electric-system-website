import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";

// Initialize Resend only when API key is available (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_xxxxxxxxxxxx") {
    return null;
  }
  return new Resend(apiKey);
};

// XSS Protection: Escape HTML entities in user input
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Rate limiting: Track requests per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

const serviceLabels: Record<string, string> = {
  photovoltaique: "Installation Photovoltaïque",
  "borne-recharge": "Bornes de Recharge VE",
  "electricite-generale": "Électricité Générale",
  domotique: "Domotique",
  securite: "Sécurité",
  informatique: "Infrastructure Informatique",
  autre: "Autre",
};

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de demandes. Veuillez réessayer dans une minute." },
        { status: 429 }
      );
    }

    const resend = getResend();

    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = validationResult.data;

    // Sanitize user inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Send email to company
    const { error: companyEmailError } = await resend.emails.send({
      from: "ELECTRIC SYSTEM Website <noreply@electric-system.lu>",
      to: process.env.CONTACT_EMAIL || "info@electric-system.lu",
      subject: `Nouvelle demande de contact - ${serviceLabels[service]}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nouvelle demande de contact</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #FF9502 0%, #FFA310 100%); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle Demande de Contact</h1>
            </div>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #FF9502; font-size: 18px; margin-top: 0;">Informations du client</h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Nom:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}" style="color: #FF9502;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Téléphone:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${safePhone}" style="color: #FF9502;">${safePhone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${serviceLabels[service]}</td>
                </tr>
              </table>

              <h2 style="color: #FF9502; font-size: 18px; margin-top: 20px;">Message</h2>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #FF9502;">
                ${safeMessage}
              </div>
            </div>

            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
              Ce message a été envoyé depuis le formulaire de contact du site web ELECTRIC SYSTEM.
            </p>
          </body>
        </html>
      `,
    });

    if (companyEmailError) {
      console.error("Error sending company email:", companyEmailError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: "ELECTRIC SYSTEM <noreply@electric-system.lu>",
      to: email,
      subject: "Confirmation de votre demande - ELECTRIC SYSTEM",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Confirmation de votre demande</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #FF9502 0%, #FFA310 100%); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">ELECTRIC SYSTEM</h1>
            </div>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px;">
              <p>Bonjour ${safeName},</p>

              <p>Nous avons bien reçu votre demande concernant: <strong>${serviceLabels[service]}</strong></p>

              <p>Notre équipe vous recontactera dans les plus brefs délais pour discuter de votre projet.</p>

              <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #FF9502; margin-top: 0;">Récapitulatif de votre message:</h3>
                <p style="color: #666;">${safeMessage}</p>
              </div>

              <p>En attendant, n&apos;hésitez pas à nous contacter directement:</p>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 5px 0;">📞 <a href="tel:+352661224409" style="color: #FF9502;">+352 661 22 44 09</a></li>
                <li style="padding: 5px 0;">📧 <a href="mailto:info@electric-system.lu" style="color: #FF9502;">info@electric-system.lu</a></li>
              </ul>

              <p>Cordialement,<br><strong>L&apos;équipe ELECTRIC SYSTEM</strong></p>
            </div>

            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px;">
                ELECTRIC SYSTEM Sàrl<br>
                177 Rue de Luxembourg, L-8077 Bertrange<br>
                RCS Luxembourg B294234 | TVA: LU36415556
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
