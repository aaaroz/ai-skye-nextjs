"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormRegister } from "./form.register";

export const RegisterPageModule: React.FC = (): React.ReactElement => {
  return (
    <Card className="flex flex-col w-full max-w-[400px] border-none">
      <CardHeader className="flex items-center gap-5 p-0 pt-8">
        <h1 className="font-bold text-2xl">Daftar Akun KontenKilat</h1>
      </CardHeader>
      <CardContent className="px-0 py-8 space-y-1">
        <FormRegister />
      </CardContent>
    </Card>
  );
};
