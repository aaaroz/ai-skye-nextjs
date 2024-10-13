"use client";
import * as React from "react";
import { CreditCardIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { PaymentHistoryTable } from "./payment.history.table";
import {
  paymentColumns,
  paymentColumnSkeleton,
} from "./payment.history.columns";
import { TTransaction } from "@/libs/entities";
import { getUserTransactions } from "@/libs/actions";

const emptyTransactions: TTransaction[] = [
  {
    email: "",
    transaction_id: "",
    updatedAt: "",
    payment_type: "",
    createdAt: "",
    phone: "",
    first_name: "",
    gross_amount: 0,
    last_name: "",
    packagename: "",
    status: "",
    order_id: "",
  },
  {
    email: "",
    transaction_id: "",
    updatedAt: "",
    payment_type: "",
    createdAt: "",
    phone: "",
    first_name: "",
    gross_amount: 0,
    last_name: "",
    packagename: "",
    status: "",
    order_id: "",
  },
];

export const PaymentHistorySection: React.FC = (): React.ReactElement => {
  const [paymentData, setPaymentData] = React.useState<TTransaction[] | null>(
    null
  );

  const fetchData = React.useCallback(async () => {
    const payment = await getUserTransactions();
    setPaymentData(payment);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      {paymentData ? (
        <PaymentHistoryTable columns={paymentColumns} data={paymentData} />
      ) : (
        <PaymentHistoryTable
          columns={paymentColumnSkeleton}
          data={emptyTransactions}
        />
      )}
    </section>
  );
};
