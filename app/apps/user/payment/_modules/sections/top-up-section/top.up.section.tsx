import * as React from "react";
import Link from "next/link";
import { WalletIcon } from "lucide-react";
import { HeadingWithIcon, TokenCard } from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { dashboardUserRoute } from "@/libs/entities";

export const TopUpSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow bg-neutral-50">
      <HeadingWithIcon icon={<WalletIcon size={32} />} text="Top Up Kata" />
      <div className="flex flex-wrap sm:flex-nowrap items-center rounded-sm p-6 space-y-6 bg-sky-800">
        <div className="w-1/2 space-y-4 text-neutral-50">
          <h1 className="text-xl md:text-2xl font-bold">Kehabisan Kata?</h1>
          <p className="text-sm md:text-base font-normal">
            Tenang, kami menyediakan top up kata untuk anda dengan harga{" "}
            <strong className="text-lg md:text-xl">
              Rp. 10.000 per 10.000 Kata.
            </strong>
          </p>
          <div>
            <Link href={dashboardUserRoute.concat("payment/top-up")}>
              <Button className="text-neutral-800 bg-sky-100 hover:bg-sky-100/50">
                Top Up Sekarang Juga
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <TokenCard />
        </div>
      </div>
    </section>
  );
};
