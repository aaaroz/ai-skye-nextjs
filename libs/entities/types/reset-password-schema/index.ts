import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Kata sandi harus diisi!" })
      .min(8, "Kata sandi tidak boleh kurang dari 8 digit!"),
    confirmPassword: z
      .string({ required_error: "Konfirmasi kata sandi harus diisi!" })
      .min(8, "Konfirmasi kata sandi tidak boleh kurang dari 8 digit!"),
    userId: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi kata sandi tidak cocok!",
  });

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
