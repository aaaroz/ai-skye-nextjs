import * as React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FormLogin } from "./form.login";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import { dashboardUserRoute } from "@/libs/entities";

export const LoginPageModule: React.FC =
  async (): Promise<React.ReactElement> => {
    const session = await auth();
    if (session) {
      redirect(dashboardUserRoute.concat("dashboard"));
    }
    return (
      <Card className="flex flex-col w-full max-w-[400px] border-none">
        <CardHeader className="flex items-center gap-5 p-0 pt-8">
          <h1 className="font-bold text-2xl">Selamat Datang Kembali!</h1>
        </CardHeader>
        <CardContent className="px-0 py-8 space-y-1">
          <FormLogin />
        </CardContent>
        <CardFooter className="p-0">
          <p className="text-xs md:text-sm text-center">
            Dengan melanjutkan, saya setuju dengan{" "}
            <Link
              href="/terms-condition"
              className="text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Persyaratan dan Ketentuan
            </Link>{" "}
            dan{" "}
            <Link
              href="/privacy-policy"
              className="text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Keamanan Privasi
            </Link>{" "}
            yang berlaku
          </p>
        </CardFooter>
      </Card>
    );
  };
