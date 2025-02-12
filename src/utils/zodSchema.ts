import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const searchSchema = z.object({
  query: z.string(),
});

export type SearchFormValue = z.infer<typeof searchSchema>;
