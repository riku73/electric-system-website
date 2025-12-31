import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ELECTRIC SYSTEM Sàrl | Électricien Professionnel Luxembourg",
    template: "%s | ELECTRIC SYSTEM",
  },
  description:
    "Services électriques professionnels au Luxembourg: installation photovoltaïque, bornes de recharge véhicules électriques, domotique, sécurité, travaux électriques. Devis gratuit à Bertrange et environs.",
  keywords: [
    "électricien luxembourg",
    "installation photovoltaïque luxembourg",
    "borne recharge véhicule électrique",
    "domotique luxembourg",
    "électricien bertrange",
    "panneaux solaires luxembourg",
    "alarme sécurité luxembourg",
    "installation électrique luxembourg",
    "smart home luxembourg",
    "ELECTRIC SYSTEM",
  ],
  authors: [{ name: "ELECTRIC SYSTEM Sàrl" }],
  creator: "ELECTRIC SYSTEM Sàrl",
  publisher: "ELECTRIC SYSTEM Sàrl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://electric-system.lu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_LU",
    url: "https://electric-system.lu",
    siteName: "ELECTRIC SYSTEM",
    title: "ELECTRIC SYSTEM Sàrl | Électricien Professionnel Luxembourg",
    description:
      "Votre électricien de confiance au Luxembourg. Installation photovoltaïque, bornes de recharge, domotique et sécurité. Devis gratuit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELECTRIC SYSTEM - Électricien Luxembourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELECTRIC SYSTEM Sàrl | Électricien Luxembourg",
    description:
      "Services électriques professionnels au Luxembourg. Installation photovoltaïque, bornes de recharge, domotique.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data as string
const jsonLdString = `{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "ELECTRIC SYSTEM Sàrl",
  "image": "https://electric-system.lu/logo.png",
  "@id": "https://electric-system.lu",
  "url": "https://electric-system.lu",
  "telephone": "+352661224409",
  "email": "info@electric-system.lu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "177 Rue de Luxembourg",
    "addressLocality": "Bertrange",
    "postalCode": "L-8077",
    "addressCountry": "LU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.6108,
    "longitude": 6.107
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Luxembourg"
  },
  "serviceType": [
    "Installation photovoltaïque",
    "Bornes de recharge véhicules électriques",
    "Électricité générale",
    "Domotique",
    "Sécurité",
    "Infrastructure informatique"
  ],
  "vatID": "LU36415556",
  "taxID": "B294234"
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {jsonLdString}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
