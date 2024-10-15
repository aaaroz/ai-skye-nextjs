import { z } from "zod";

export const adminFeatureSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Nama Fitur minimal 3 huruf"),
  subDescription: z.string().min(3, "Sub Deskripsi minimal 3 huruf"),
  description: z.string().min(20, "Deskripsi minimal 20 huruf"),
  prompts: z
    .array(
      z.object({
        nameprompt: z.string(),
        prompt: z.string(),
        categoryprompt: z.string(),
      }),
      { required_error: "Prompts harus ditambahkan!" }
    )
    .min(5, "Perintah AI minimal harus 5 prompt"),
  category: z.string({ required_error: "Kategori fitur tidak boleh kosong!" }),
});

export const promptSchema = z.object({
  nameprompt: z.string().min(3, "Nama prompt minimal 3 huruf"),
  prompt: z.string().min(3, "Deskripsi prompt minimal 3 huruf"),
  categoryprompt: z.string({
    required_error: "Kategori prompt tidak boleh kosong!",
  }),
});

export type TPromptSchema = z.infer<typeof promptSchema>;

export type TAdminFeatureSchema = z.infer<typeof adminFeatureSchema>;
