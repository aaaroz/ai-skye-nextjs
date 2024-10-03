import * as React from "react";
import { Button } from "@/components/ui/button";
import { DocumentCard } from "./document.card";

const documentData = [
  {
    title: "Semua Dokumen",
    count: 0,
  },
  {
    title: "Dokumen Tiktok",
    count: 0,
  },
  {
    title: "dokumen instagram",
    count: 0,
  },
  {
    title: "dokumen e-commerce",
    count: 0,
  },
];
export const TokenSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 space-y-4 rounded-md bg-neutral-50">
      <div className="flex flex-wrap sm:flex-nowrap items-center rounded-sm p-6 space-y-6 bg-sky-800">
        <div className="w-1/2 space-y-4 text-neutral-50">
          <h1 className="text-xl md:text-2xl font-bold">
            Selamat Datang, John Doe
          </h1>
          <p className="text-sm md:text-base font-normal">
            Pada penggunaan awal anda mendapatkan free 3000 token untuk
            menghasilkan respon dari AI, untuk penggunaan selanjutnya anda bisa
            topup token di menu pembayaran.
          </p>
          <Button className="text-neutral-800 bg-sky-100 hover:bg-sky-100/50">
            Topup Disini
          </Button>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="w-fit text-center rounded px-6 py-4 bg-sky-100">
            <h1 className="text-xl font-semibold">Token</h1>
            <h2 className="text-4xl font-bold">3000</h2>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <strong className="text-base md:text-lg">
          Semua dokumen yang tersimpan
        </strong>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {documentData.map(({ title, count }, index) => (
          <DocumentCard key={index} title={title} count={count} />
        ))}
      </div>
    </section>
  );
};
