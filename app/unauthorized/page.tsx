import * as React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { Logo } from "@/components/common/logo";
import { AlertTriangleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnauthorizedPage: NextPage = (): React.ReactElement => {
  return (
    <section className="container min-h-screen flex flex-col gap-8 justify-center items-center">
      <Logo />
      <div className="max-w-md flex flex-col items-center justify-center rounded border space-y-4 p-6">
        <h1 className="inline-flex items-center gap-2.5 text-2xl md:text-4xl font-bold">
          <AlertTriangleIcon />
          Oooopss!{" "}
        </h1>
        <h2 className="text-lg md:text-2xl text-center font-semibold">
          Akses Ditolak!
        </h2>
        <p className="text-sm md:text-base text-justify text-muted-foreground">
          Sepertinya kamu belum punya izin untuk masuk ke sini. Mungkin kamu
          sedang tersesat di area terlarang. Silahkan kembali ke halaman utama
          KontenKilat
        </p>
        <Link href="/">
          <Button>Kembali ke halaman utama</Button>
        </Link>
      </div>
    </section>
  );
};

export default UnauthorizedPage;
