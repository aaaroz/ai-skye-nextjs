import * as React from "react";
import { ScrollTextIcon } from "lucide-react";

export const ThirdStepInstruction: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full p-4 space-y-6">
      <div className="flex gap-2 items-center">
        <div className="relative size-14 rounded-full bg-sky-100 text-sky-800">
          <ScrollTextIcon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-7" />
        </div>
        <div className="space-y-1">
          <span className="text-lg font-medium text-sky-800">Langkah 3</span>
          <h1 className="text-3xl font-semibold">Dapatkan Hasilnya</h1>
        </div>
      </div>
      <div className="w-full">
        <p className="text-muted-foreground text-lg">
          Setelah mengisi semua detail dan memilih prompt, klik tombol ‘submit’
          untuk mendapatkan hasil dari AI, hanya dalam beberapa detik, ide
          konten kamu sudah muncul di halaman. Kamu bisa mengedit kembali ide
          konten kamu untuk disesuaikan terlebih dahulu, lalu kamu bisa
          menyimpannya di dokumen kamu.
        </p>
      </div>
    </div>
  );
};
