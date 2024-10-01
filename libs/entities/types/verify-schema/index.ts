import { z } from "zod";

export const verifySchema = z.object({
  codeVerification: z
    .string({ required_error: "Kode Verifikasi harus diisi!" })
    .min(2, "Kode Verifikasi harus lebih dari 2 digit!")
    .max(5, "Kode Verifikasi tidak boleh lebih dari 5 digit!"),
});

export type TVerifySchema = z.infer<typeof verifySchema>;
