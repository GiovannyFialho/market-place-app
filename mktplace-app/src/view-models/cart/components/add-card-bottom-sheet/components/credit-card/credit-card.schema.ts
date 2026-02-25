import { z } from "zod";

export const creditCardSchema = z.object({
  titularName: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .nonempty("Nome do titular é obrigatório"),

  number: z
    .string()
    .nonempty("Número do cartão é obrigatório")
    .refine(
      (value) => {
        const cleaned = value.replace(/\s/g, "");
        return /^\d{16}$/.test(cleaned);
      },
      {
        message: "Número do cartão deve ter exatamente 16 dígitos",
      },
    ),

  expirationDate: z
    .string()
    .nonempty("Data de vencimento é obrigatória")
    .regex(/^\d{2}\/\d{2}$/, "Formato deve ser MM/AA"),

  CVV: z
    .string()
    .nonempty("CVV é obrigatório")
    .regex(/^\d{3}$/, "CVV deve ter exatamente 3 dígitos"),
});

export type CreditCardFormData = z.infer<typeof creditCardSchema>;
