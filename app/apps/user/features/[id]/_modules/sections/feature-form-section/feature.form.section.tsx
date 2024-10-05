import * as React from "react";
import { AlertCircleIcon } from "lucide-react";
import { FeatureForm } from "./feature.form";

export const FeatureFormSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow-md bg-neutral-50 w-full h-fit lg:w-[40%]">
      <div className="flex w-full items-center justify-between p-2 rounded-sm bg-sky-100">
        <h1 className="text-sm font-semibold">Saldo anda adalah 3000 Kata</h1>
        <AlertCircleIcon size={18} />
      </div>
      <p className="text-sm md:text-base text-muted-foreground">
        Masukkan beberapa detail produk kamu yang akan dibuatkan kontennya, lalu
        pilih perintah AI yang sesuai dengan kebutuhanmu.
      </p>
      <FeatureForm />
    </section>
  );
};
