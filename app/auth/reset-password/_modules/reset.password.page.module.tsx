"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormResetPassword } from "./form.reset.password";
import { formatMaskedPhoneNumber } from "@/libs/utils";

export const ResetPasswordPageModule: React.FC = (): React.ReactElement => {
  const maskedPhoneNumber = formatMaskedPhoneNumber("081213294328");

  return (
    <Card className="flex flex-col w-full max-w-[400px] border-none">
      <CardHeader className="flex items-center gap-5 p-0 pt-8">
        <h1 className="font-bold text-2xl">Daftar Akun KontenKilat</h1>
      </CardHeader>
      <CardContent className="px-0 py-8 space-y-8">
        <p className="text-sm text-center">
          Silahkan cek pesan WhatsApp anda. Kode verifikasi telah dikirimkan ke
          nomor {maskedPhoneNumber}
        </p>
        <FormResetPassword />
      </CardContent>
    </Card>
  );
};
