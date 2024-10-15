import * as React from "react";
import { FileEditIcon } from "lucide-react";

export const SecondStepInstruction: React.FC = (): React.ReactElement => {
  return (
    <div className="order-3 md:order-none w-full p-4 space-y-6">
      <div className="flex gap-2 items-center">
        <div className="relative size-12 md:size-14 rounded-full bg-sky-100 text-sky-800">
          <FileEditIcon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-6 md:size-7" />
        </div>
        <div className="space-y-1">
          <span className="text-sm sm:text-base md:text-lg font-medium text-sky-800">
            Langkah 2
          </span>
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
            Berikan Sedikit Detail dan Pilih Prompt
          </h1>
        </div>
      </div>
      <div className="w-full">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Masukkan beberapa detail seperti nama produk, dan pilih kategori
          produk, lalu pilih prompt/perintah AI yang sesuai dengan konten yang
          akan kamu buat. Kami menyediakan banyak pilihan prompt yang menarik
          untuk konten anda.
        </p>
      </div>
    </div>
  );
};
