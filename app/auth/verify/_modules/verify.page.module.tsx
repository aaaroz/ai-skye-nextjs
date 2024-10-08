"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormVerify } from "./form.verify";
import { decryptPhoneNumber, formatMaskedPhoneNumber } from "@/libs/utils";
import { dataUserForgotPassword } from "../../forgot-password/_modules/form.forgot.password";
import { dataUserRegister } from "../../register/_modules/form.register";

export const VerifyPageModule: React.FC = (): React.ReactElement => {
  const searchParams = useSearchParams();

  const token =
    searchParams?.get("token") ||
    dataUserForgotPassword.encryptedPhoneNumber ||
    dataUserRegister.encryptedPhoneNumber;
  let maskedPhoneNumber = formatMaskedPhoneNumber(
    dataUserForgotPassword.phoneNumber || dataUserRegister.phoneNumber
  );
  if (token && searchParams) {
    const phoneNumber = decryptPhoneNumber(token);
    maskedPhoneNumber = formatMaskedPhoneNumber(phoneNumber);
  }
  return (
    <Card className="flex flex-col w-full max-w-[400px] border-none">
      <CardHeader className="flex items-center gap-5 p-0 pt-8">
        <h1 className="font-bold text-2xl">Masukan Kode Verifikasi</h1>
      </CardHeader>
      <CardContent className="px-0 py-8 space-y-8">
        <p className="text-sm text-center">
          Silahkan cek pesan WhatsApp anda. Kode verifikasi telah dikirimkan ke
          nomor {maskedPhoneNumber}
        </p>
        <FormVerify />
      </CardContent>
    </Card>
  );
};
