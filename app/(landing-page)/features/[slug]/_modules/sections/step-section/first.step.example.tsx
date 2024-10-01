import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardPromptExample } from "./card.prompt.example";

const promptExamples = [
  {
    name: "Video Family Friendly",
    prompt:
      "Buatkan ide konten video tiktok family friendly untuk mempromosikan produk makanan yang bernama ",
    productName: `{NamaProduk}`,
    category: "Makanan",
  },
  {
    name: "Video Lucu dan Seru",
    prompt:
      "Buatkan ide konten video tiktok Lucu dan Seru untuk mempromosikan produk makanan yang bernama ",
    productName: `{NamaProduk}`,
    category: "Makanan",
  },
  {
    name: "Video Challenge",
    prompt:
      "Buatkan ide konten video tiktok challenge untuk mempromosukan produk minuman segar yang bernama",
    productName: `{NamaProduk}`,
    category: "Minuman",
  },
];

export const FirstStepExample: React.FC = (): React.ReactElement => {
  return (
    <div className="order-2 md:order-none relative w-full p-4 space-y-6 rounded-md bg-neutral-50 shadow">
      <div className="space-y-1.5 w-full flex flex-col md:flex-row h-[500px] md:h-[400px] overflow-hidden [mask:linear-gradient(90deg,white_60%,transparent)] md:[mask:linear-gradient(90deg,white_80%,transparent)] ">
        <section className="p-2 w-full md:w-1/2 overflow-hidden">
          <div className="space-y-2">
            <fieldset className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold">
                Nama produk
              </label>
              <Input id="name" className="h-8" readOnly />
              <p className="text-xs">Masukkan nama produk anda</p>
            </fieldset>
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold">
                Kategori produk
              </label>
              <div className="flex gap-2 items-center">
                <Button className="text-xs font-medium px-2 h-6" size="sm">
                  Makanan
                </Button>
                <Button
                  className="text-xs font-medium px-2 h-6"
                  size="sm"
                  variant="ghost"
                >
                  Minuman
                </Button>
                <Button
                  className="text-xs font-medium px-2 h-6"
                  size="sm"
                  variant="ghost"
                >
                  Alat elektronik
                </Button>
                <Button
                  className="text-xs font-medium px-2 h-6"
                  size="sm"
                  variant="ghost"
                >
                  Lainnya
                </Button>
              </div>
              <p className="text-xs">Pilih kategori produk anda</p>
            </div>
            <fieldset className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold">
                Maksimal token
              </label>
              <Input id="name" className="h-8" value="3000" readOnly />
              <p className="text-xs">
                Masukkan maksimal token yang akan digunakan
              </p>
            </fieldset>
            <fieldset className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold">
                Perintah AI
              </label>
              <Textarea readOnly />
            </fieldset>
          </div>
        </section>
        <section className="p-2 w-full md:w-1/2 overflow-hidden">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-xs font-semibold">Pilih Perintah AI</h3>
            {promptExamples.map(
              ({ name, prompt, productName, category }, index) => (
                <CardPromptExample
                  key={index}
                  name={name}
                  prompt={prompt}
                  productName={productName}
                  category={category}
                />
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
