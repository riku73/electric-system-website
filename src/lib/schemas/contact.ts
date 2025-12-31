import { z } from "zod";

const serviceValues = [
  "photovoltaique",
  "borne-recharge",
  "electricite-generale",
  "domotique",
  "securite",
  "informatique",
  "autre",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caracteres")
    .max(100, "Le nom ne peut pas depasser 100 caracteres"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .min(8, "Le numero de telephone doit contenir au moins 8 chiffres")
    .max(20, "Le numero de telephone ne peut pas depasser 20 caracteres"),
  service: z.enum(serviceValues, {
    message: "Veuillez selectionner un service",
  }),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caracteres")
    .max(2000, "Le message ne peut pas depasser 2000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
