import { z } from "zod";

export const forgotPasswordSchema = z.object({
  phoneNumber: z
    .string({ required_error: "Nomor telepon harus diisi!" })
    .min(10, "Nomor telepon harus lebih dari 10 digit!")
    .max(14, "Nomor telepon tidak boleh lebih dari 14 digit!")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka!"),
});

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
