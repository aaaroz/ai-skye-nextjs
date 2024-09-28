import * as React from "react";
import { Button } from "@/components/ui/button";

const appName = process.env.APP_NAME;

export const HeroSection: React.FC = (): React.ReactElement => {
  return (
    <section
      id="hero-section"
      className="2xl:container relative w-full py-16 md:py-0 h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 2xl:left-48 -left-20 md:left-2 top-20 md:top-40 -z-10 size-36 md:size-60 bg-gradient-to-b from-sky-300 to-transparent rounded-full blur-3xl transform scale-110" />
      <div className="absolute inset-0 left-[23rem] md:left-[65rem] top-80 md:top-60 -z-10 size-52 md:size-72 bg-gradient-to-b from-sky-800 to-transparent rounded-full blur-3xl transform scale-110" />
      <div className="w-full p-4 pt-0 gap-8 flex flex-col items-center justify-center text-center">
        <div className="bg-sky-100 text-sky-800 border border-sky-600 text-xs font-bold py-1 px-2 md:px-8 rounded-full uppercase">
          <h1>AI Terus Melaju, Yuk Jangan Sampai Ketinggalan!</h1>
        </div>
        <h1 className="text-4xl font-bold md:text-5xl md:font-extrabold mb-4 max-w-2xl">
          Ayo, Ciptakan Masa Depan Cerah dengan{" "}
          <span className="text-sky-600">{appName || "Kami"}</span> dan{" "}
          <span className="text-sky-600">AI</span>!{" "}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl">
          Bikin konten itu gampang! Di KontenKilat, kami bikin segalanya lebih
          simpel. Dengan AI canggih, hemat waktu dan tenaga jadi lebih mudah.
          Mau untuk kerjaan atau hobi? Kami punya alat keren buat bantu Anda
          ciptakan konten yang bikin orang terpesona!
        </p>
        <Button className="rounded-full">Coba Gratis Sekarang</Button>
      </div>
    </section>
  );
};
