"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormForgotPassword } from "./form.forgot.password";

export const ForgotPasswordPageModule: React.FC = (): React.ReactElement => {
  return (
    <Card className="flex flex-col w-full max-w-[400px] border-none">
      <CardHeader className="flex items-center gap-5 p-0 pt-8">
        <h1 className="font-bold text-2xl">Lupa Kata Sandi Anda?</h1>
      </CardHeader>
      <CardContent className="px-0 py-8 space-y-8">
        <p className="text-sm text-center">
          Masukan nomor telepon anda untuk mengatur ulang kata sandi anda. Kami
          akan mengirimkan anda kode verifikasi untuk mengatur ulang kata sandi.
        </p>
        <FormForgotPassword />
      </CardContent>
    </Card>
  );
};
