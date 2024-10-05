import { z } from "zod";

export const topUpSchema = z.object({
  email: z
    .string({ required_error: "Email harus diisi" })
    .email("Email harus valid"),
  qty: z.coerce
    .number({ required_error: "Jumlah harus diisi" })
    .min(1, "Jumlah harus diisi")
    .int()
    .nonnegative(),
  total: z.coerce.number().min(0).int().nonnegative(),
});

export type TTopUpSchema = z.infer<typeof topUpSchema>;
