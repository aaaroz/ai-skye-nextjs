import { z } from "zod";

export const verifySchema = z.object({
  userId: z.string().optional(),
  codeVerification: z
    .string({ required_error: "Kode Verifikasi harus diisi!" })
    .min(5, "Kode Verifikasi harus lebih dari 5 digit!")
    .max(6, "Kode Verifikasi tidak boleh lebih dari 6 digit!"),
});

export type TVerifySchema = z.infer<typeof verifySchema>;
