import * as React from "react";
import { CreditCardIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { PaymentHistoryTable } from "./payment.history.table";
import { paymentColumns, paymentData } from "./payment.history.columns";

export const PaymentHistorySection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon
        icon={<CreditCardIcon size={32} />}
        text="Riwayat Pembayaran"
      />
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Rekap riwayat transaksi anda.
      </p>
      <Separator />
      <PaymentHistoryTable columns={paymentColumns} data={paymentData} />
    </section>
  );
};
