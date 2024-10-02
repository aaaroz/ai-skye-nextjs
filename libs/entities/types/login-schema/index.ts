import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string({ required_error: "Nomor telepon harus diisi!" })
    .min(10, "Nomor telepon harus lebih dari 10 digit!")
    .max(14, "Nomor telepon tidak boleh lebih dari 14 digit!")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka!"),
  password: z
    .string({ required_error: "Kata sandi harus diisi!" })
    .min(8, "Kata sandi tidak boleh kurang dari 8 digit!"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
