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
import { cn, formatRupiah } from "@/libs/utils";
import { TTransactionAdmin } from "@/libs/actions/transaction/type";

interface TransactionDetailSheetTriggerProps {
  orderId: string;
  transactionData: TTransactionAdmin[];
}
export const TransactionDetailSheetTrigger: React.FC<
  TransactionDetailSheetTriggerProps
> = ({ orderId, transactionData }): React.ReactElement => {
  const data = transactionData.find((item) => item.order_id === orderId);

  if (!data) {
    return <TransactionDetailSheetFallback />;
  }

  const date = data.createdAt;

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
              <p>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Nomor Telepon</strong>
              <p>{data.phone}</p>
            </div>
          </div>
          <h1 className="text-base md:text-lg font-semibold py-4">
            Informasi Pembayaran
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">ID Pesanan</strong>
              <p>{data.order_id}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Nama Paket</strong>
              <p>{data.packagename}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Metode Pembayaran</strong>
              <p>{data.payment_type?.toUpperCase()}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Tanggal Pembayaran</strong>
              <div className="flex flex-col">
                <span>{date}</span>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Jumlah</strong>
              <p className="text-2xl md:text-3xl font-bold">
                {formatRupiah(data.gross_amount ? data.gross_amount : 0)}
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
