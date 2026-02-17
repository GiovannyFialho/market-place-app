import { z } from "zod";

export const profileSchema = z
  .object({
    name: z.string().min(4, {
      message: "Nome deve ter pelo menos 4 caracteres",
    }),
    email: z.email({
      message: "E-mail inválido",
    }),
    phone: z.string().refine((value) => /^\d{11}$/.test(value), {
      message: "Telefone deve ter 11 dígitos",
    }),
    newPassword: z.string().optional(),
    confirmNewPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.newPassword || data.newPassword === data.confirmNewPassword,
    {
      message: "As senhas não conferem",
      path: ["confirmNewPassword"],
    },
  );

export type ProfileFormData = z.infer<typeof profileSchema>;
