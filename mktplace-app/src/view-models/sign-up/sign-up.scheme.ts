import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: "Nome deve ter pelo menos 4 caracteres" })
      .nonempty({ message: "Nome é obrigatório" }),
    email: z
      .email({ message: "E-mail inválido" })
      .nonempty({ message: "E-mail é obrigatório" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
      .nonempty({ message: "Senha é obrigatória" }),
    confirmPassword: z.string().nonempty({ message: "Senha é obrigatória" }),
    phone: z
      .string()
      .regex(/^\d{11}$/, {
        message: "Telefone deve ter 11 dígitos (DDD + número)",
      })
      .nonempty({ message: "Telefone é obrigatório" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Senhas não coincidem",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
