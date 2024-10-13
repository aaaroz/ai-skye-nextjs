"use client";
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
import { TTransaction } from "@/libs/entities";
import { getUserTransactionById } from "@/libs/actions";
import { id } from "date-fns/locale";
import { format } from "date-fns";

interface PaymentDetailSheetTriggerProps {
  orderId: string;
}
export const PaymentDetailSheetTrigger: React.FC<
  PaymentDetailSheetTriggerProps
> = ({ orderId }): React.ReactElement => {
  const [data, setData] = React.useState<TTransaction | null>(null);

  const fetchData = React.useCallback(async () => {
    const transaction = await getUserTransactionById(orderId);
    setData(transaction);
  }, [orderId]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (!data) {
    return <PaymentDetailSheetFallback />;
  }
  const date = new Date(data.updatedAt.replace(" UTC+07:00", ""));
  const dateValue = data.updatedAt
    ? format(date, "dd MMMM yyyy", { locale: id })
    : "-";
  const timeValue = data.updatedAt
    ? format(date, "K:mm aa", { locale: id })
    : "-";

  const firstName = data.first_name;
  const lastName = data.last_name;
  const fullName = `${firstName} ${lastName}`;

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
              <p>{fullName}</p>
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
              <p>{data.payment_type}</p>
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Tanggal Pembayaran</strong>
              {data.updatedAt ? (
                <div className="flex flex-col">
                  <strong>{dateValue}</strong>
                  <span className="text-muted-foreground">{timeValue}</span>
                </div>
              ) : (
                <p>Belum dibayar</p>
              )}
            </div>
            <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
              <strong className="w-[35%]">Jumlah</strong>
              <p className="text-2xl md:text-3xl font-bold text-sky-800">
                {formatRupiah(data.gross_amount)}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end items-end gap-2 my-4">
            {/* <Button variant="outline">Lihat Invoice</Button> */}
            {data.status === "pending" ? (
              <Button>Bayar Sekarang</Button>
            ) : (
              <SheetClose asChild>
                <Button>Tutup</Button>
              </SheetClose>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const TransactionStatus: React.FC<{ status: string }> = ({ status }) => {
  const formattedStatus =
    status === "settlement"
      ? "Berhasil"
      : status === "pending"
      ? "Ditunda"
      : "Gagal";

  const classNames = cn(
    "w-full py-1.5 border font-medium text-center rounded",
    {
      "border-green-600 bg-green-100 text-green-600":
        formattedStatus === "Berhasil",
      "border-red-600 bg-red-100 text-red-600": formattedStatus === "Gagal",
      "border-yellow-600 bg-yellow-100 text-yellow-600":
        formattedStatus === "Ditunda",
    }
  );
  return <div className={classNames}>Transaksi {formattedStatus}</div>;
};

const PaymentDetailSheetFallback: React.FC = (): React.ReactElement => {
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
          <SheetDescription>Loading..</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
