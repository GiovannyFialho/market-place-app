import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .email({ message: "E-mail inválido" })
    .nonempty({ message: "E-mail é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
    .nonempty({ message: "Senha é obrigatória" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
