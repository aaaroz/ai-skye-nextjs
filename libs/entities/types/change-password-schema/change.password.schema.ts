import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string({ required_error: "Kata sandi harus diisi!" })
      .min(8, "Kata sandi tidak boleh kurang dari 8 digit!"),
    newPassword: z
      .string({ required_error: "Kata sandi harus diisi!" })
      .min(8, "Kata sandi tidak boleh kurang dari 8 digit!"),
    confirmPassword: z
      .string({ required_error: "Konfirmasi kata sandi harus diisi!" })
      .min(8, "Konfirmasi kata sandi tidak boleh kurang dari 8 digit!"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi kata sandi tidak cocok!",
  });

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;
