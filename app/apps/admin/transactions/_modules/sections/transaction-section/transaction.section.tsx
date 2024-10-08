import * as React from "react";
import { CreditCardIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { TransactionTable } from "./transaction.table";
import { transactionColumns, transactionData } from "./transaction.columns";
import Link from "next/link";
import { dashboardAdminRoute } from "@/libs/entities";

export const TransactionSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <Link href={dashboardAdminRoute.concat("transactions")}>
        <HeadingWithIcon
          icon={<CreditCardIcon size={32} />}
          text="Riwayat Transaksi Terbaru"
        />
      </Link>
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Seluruh data transaksi yang terdapat pada aplikasi{" "}
        <strong>KontenKilat</strong> yang terintegrasi dengan payment gateway{" "}
        <em>MidTrans</em>.
      </p>
      <Separator />
      <TransactionTable columns={transactionColumns} data={transactionData} />
    </section>
  );
};
