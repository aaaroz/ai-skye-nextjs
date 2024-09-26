import { Button } from "@/components/ui/button";
import * as React from "react";

export const HeroSection: React.FC = (): React.ReactElement => {
  return (
    <section className="2xl:container relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 2xl:left-48 left-2 top-40 -z-10 size-60 bg-gradient-to-b from-sky-300 to-transparent rounded-full blur-3xl transform scale-110" />
      <div className="absolute inset-0 left-[65rem] top-60 -z-10 size-72 bg-gradient-to-b from-sky-800 to-transparent rounded-full blur-3xl transform scale-110" />
      <div className="w-full p-4 gap-8 flex flex-col items-center justify-center text-center">
        <div className="bg-sky-100 text-sky-800 border border-sky-600 text-xs font-bold py-1 px-8 rounded-full">
          <h1>AI TERUS BERKEMBANG, JANGAN KETINGGALAN</h1>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 max-w-2xl">
          Manfaatkan AI Bersama Kami, Untuk Masa Depan yang{" "}
          <span className="text-sky-800">Lebih Baik</span>
        </h1>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          KontenKilat menyediakan berbagai macam solusi untuk kebutuhan
          sehari-hari dan pekerjaan Anda. Dengan berbagai pilihan alat yang kami
          tawarkan, Anda dapat menghemat waktu dan tenaga dalam proses pembuatan
          konten.
        </p>
        <Button className="rounded-full">Coba Gratis Sekarang</Button>
      </div>
    </section>
  );
};
