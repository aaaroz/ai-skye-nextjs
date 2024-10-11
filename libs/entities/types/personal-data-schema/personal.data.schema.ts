import { z } from "zod";
import { TDocument } from "../document";

export const personalDataSchema = z.object({
  fullName: z
    .string({ required_error: "Nama lengkap harus diisi!" })
    .min(2, "Nama lengkap harus terdiri dari minimal 2 karakter!"),
  phoneNumber: z
    .string({ required_error: "Nomor telepon harus diisi!" })
    .min(10, "Nomor telepon harus lebih dari 10 digit!")
    .max(14, "Nomor telepon tidak boleh lebih dari 14 digit!")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka!"),
  position: z
    .string({ required_error: "Jabatan harus diisi!" })
    .min(2, "Jabatan harus terdiri dari minimal 2 karakter!"),
  company: z.string().optional(),
  city: z.string().optional(),
  birthDate: z.date().optional(),
  avatar: z.string().optional(),
});

export type TPersonalDataSchema = z.infer<typeof personalDataSchema>;

export type TProfileData = {
  wordCredits: number;
  isBlocked: boolean;
  name: string;
  jabatan: string;
  createdAt: string;
  isVerified: boolean;
  image_url: string;
  phoneNumber: string;
  role: string;
  tempatTanggalLahir: string;
  kota: string;
  dokumenTersimpan: TDocument[];
  wordUsed: number;
  updatedAt: string;
  perusahaan: string;
};
