"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormResetPassword } from "./form.reset.password";
import { formatMaskedPhoneNumber } from "@/libs/utils";
import { useSearchParams } from "next/navigation";

export const ResetPasswordPageModule: React.FC = (): React.ReactElement => {
  const searchParams = useSearchParams();

  const userId = searchParams?.get("userId");
  const phoneNumber = searchParams?.get("phoneNumber");

  const maskedPhoneNumber = formatMaskedPhoneNumber(phoneNumber as string);
  return (
    <Card className="flex flex-col w-full max-w-[400px] border-none">
      <CardHeader className="flex items-center gap-5 p-0 pt-8">
        <h1 className="font-bold text-2xl">Masukan Kata Sandi Baru</h1>
      </CardHeader>
      <CardContent className="px-0 py-8 space-y-8">
        <p className="text-sm text-center">
          Buatlah kata sandi baru yang aman, untuk akun anda dengan nomot
          telepon {maskedPhoneNumber}
        </p>
        <FormResetPassword
          id={userId as string}
          phoneNumber={phoneNumber as string}
        />
      </CardContent>
    </Card>
  );
};
