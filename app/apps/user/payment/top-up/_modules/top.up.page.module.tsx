import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { BanknoteIcon } from "lucide-react";
import { TopUpFormSection } from "./sections";

export const TopUpPageModule: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon
        icon={<BanknoteIcon size={32} />}
        text="Pembelian Kata"
      />
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Payment gateway kami menggunakan <em>MidTrans</em> yang sudah terpercaya
        dapat memberikan service transaksi yang aman bagi anda.
      </p>
      <Separator />
      <TopUpFormSection />
    </section>
  );
};
