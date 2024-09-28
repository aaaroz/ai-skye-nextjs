import * as React from "react";
import { CheckSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout";

const benefits = [
  "Akses ke seluruh fitur KontenKilat",
  "Simpan hasil ide kedalam dokumen",
  "Dapatkan 10.000 kata untuk generate konten",
  "Pilih prompt perintah AI sesuai kebutuhan",
  "Tersedia banyak pilihan prompt untuk menghasilkan ide konten",
  "Bayar mudah dengan e-wallet dan QRIS",
];
export const PricingSection: React.FC = (): React.ReactElement => {
  return (
    <div id="pricing" className="w-full py-20 bg-sky-50">
      <SectionContainer className="lg:space-y-16">
        <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-0 w-full justify-between items-start">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Coba seluruh keajaiban KontenKilat.id dengan harga seminimal
            mungkin.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground w-full md:w-3/4">
            Topup 10000 Kata untuk mendapatkan ide konten anda menggunakan fitur
            fitur yang kami sediakan hanya dengan Rp.10.000,-
          </p>
        </div>
        <div className="space-y-16">
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex text-base sm:text-lg md:text-xl font-semibold text-muted-foreground pr-4 items-center"
              >
                <CheckSquareIcon className="size-4 sm:size-5 md:size-6 mr-2.5 shrink-0 text-sky-800" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Coba Gratis Sekarang</Button>
            <p className="text-sm text-muted-foreground max-w-md">
              Kamu akan mendapatkan 3000 kata pertama saat pertama kali
              mendaftar platform kami, tunggu apalagi ayo coba sekarang!
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
