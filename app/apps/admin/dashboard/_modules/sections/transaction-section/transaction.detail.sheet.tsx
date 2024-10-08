import * as React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ActionButton } from "@/components/dashboard-page";
import { FileTextIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { transactionData } from "./transaction.columns";
import { cn, formatRupiah } from "@/libs/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface TransactionDetailSheetTriggerProps {
  orderId: string;
}
export const TransactionDetailSheetTrigger: React.FC<
  TransactionDetailSheetTriggerProps
> = ({ orderId }): React.ReactElement => {
  const data = transactionData.find((item) => item.orderId === orderId);
  if (!data) {
    return <TransactionDetailSheetFallback />;
  }

  const date = format(data.createdAt as Date, "dd MMMM yyyy", {
    locale: id,
  });

  const time = format(data.createdAt as Date, "K:mm aa", {
    locale: id,
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ActionButton className="shrink-0">
          <FileTextIcon size={16} />
        </ActionButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail Transaction</SheetTitle>
          <SheetDescription className="sr-only">
            User Transaction Details.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col space-y-0.5 py-4 items-center">
            <TransactionStatus status={data.status} />
          </div>
          <Separator />
          <h1 className="text-base md:text-lg font-semibold py-4">
            Informasi Pelanggan
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Nama Lengkap</strong>
              <p>{data.name}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Nomor Telepon</strong>
              <p>{data.phoneNumber}</p>
            </div>
          </div>
          <h1 className="text-base md:text-lg font-semibold py-4">
            Informasi Pembayaran
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">ID Pesanan</strong>
              <p>{data.orderId}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Nama Paket</strong>
              <p>{data.packageName}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Metode Pembayaran</strong>
              <p>{data.paymentMethod}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Tanggal Pembayaran</strong>
              <div className="flex flex-col">
                <strong>{date}</strong>
                <span className="text-muted-foreground">{time}</span>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Jumlah</strong>
              <p className="text-2xl md:text-3xl font-bold">
                {formatRupiah(data.total)}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end items-end gap-2 my-4">
            <SheetClose asChild>
              <Button variant="outline">Tutup</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const TransactionStatus: React.FC<{ status: string }> = ({ status }) => {
  const classNames = cn(
    "w-full py-1.5 border font-medium text-center rounded",
    {
      "border-green-600 bg-green-100 text-green-600": status === "settled",
      "border-red-600 bg-red-100 text-red-600": status === "failed",
      "border-yellow-600 bg-yellow-100 text-yellow-600": status === "pending",
    }
  );
  const formattedStatus =
    status === "settled"
      ? "Berhasil"
      : status === "pending"
      ? "Ditunda"
      : "Gagal";
  return <div className={classNames}>Transaksi {formattedStatus}</div>;
};

const TransactionDetailSheetFallback: React.FC = (): React.ReactElement => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ActionButton className="shrink-0">
          <FileTextIcon size={16} />
        </ActionButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail Transaksi</SheetTitle>
          <SheetDescription>Data Transaksi tidak ditemukan.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
