import { z } from "zod";

export const featureAISchema = z.object({
  productName: z
    .string({ required_error: "Nama Produk harus diisi!" })
    .min(3, "Nama Produk harus lebih dari 3 digit!"),
  productCategory: z.string({ required_error: "Kategori Produk harus diisi!" }),
  maxToken: z.coerce
    .number({ required_error: "Maksimal kata harus berupa angka!" })
    .min(0)
    .int()
    .nonnegative(),
  prompt: z
    .string({ required_error: "Perintah AI tidak boleh kosong!" })
    .min(8, "Perintah AI tidak boleh kurang dari 8 digit!"),
  featureName: z.string(),
});

export type TFeatureAISchema = z.infer<typeof featureAISchema>;
