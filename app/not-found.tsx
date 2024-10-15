import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="container min-h-screen flex flex-col gap-4 justify-center items-center">
      <Logo />
      <div className="max-w-md flex flex-col items-center justify-center rounded border space-y-4 p-6">
        <h1 className="inline-flex items-center gap-2.5 text-2xl md:text-4xl font-bold">
          <AlertTriangleIcon />
          Oooopss!{" "}
        </h1>
        <h2 className="text-lg md:text-2xl text-center font-semibold">
          Halaman Tidak Ditemukan!
        </h2>
        <p className="text-sm md:text-base text-center text-muted-foreground">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan periksa kembali URL yang Anda masukkan atau gunakan tombol di
          bawah ini untuk kembali ke halaman utama.
        </p>
        <Link href="/">
          <Button>Kembali ke halaman utama</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
