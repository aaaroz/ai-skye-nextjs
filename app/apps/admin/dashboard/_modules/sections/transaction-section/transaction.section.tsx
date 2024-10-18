"use client";
import * as React from "react";
import Link from "next/link";
import { CreditCardIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { TransactionTable } from "./transaction.table";
import { transactionColumns } from "./transaction.columns";
import { dashboardAdminRoute } from "@/libs/entities";
import { useAdminDashboard } from "@/libs/hooks";
import { TTransactionAdmin } from "@/libs/actions/transaction/type";
import { translateMonthToEnglish } from "@/libs/utils";

export const TransactionSection: React.FC = (): React.ReactElement => {
  const { transactionData } = useAdminDashboard();
  const transactions: TTransactionAdmin[] = [];
  transactionData.forEach((userData) => {
    transactions.push(...userData.transactions);
  });

  const latestTransaction = transactions
    .sort((a, b) => {
      return (
        new Date(translateMonthToEnglish(b.createdAt)).getTime() -
        new Date(translateMonthToEnglish(a.createdAt)).getTime()
      );
    })
    .slice(0, 5);

  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <Link href={dashboardAdminRoute.concat("transactions")}>
        <HeadingWithIcon
          icon={<CreditCardIcon size={32} />}
          text="Riwayat Transaksi Terbaru"
        />
      </Link>
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Menampilkan 5 riwayat transaksi terbaru.
      </p>
      <Separator />
      <TransactionTable columns={transactionColumns} data={latestTransaction} />
    </section>
  );
};
