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
import { getPaymentMidtrans, getUserTransactionById } from "@/libs/actions";
import { PaymentNotificationDialog } from "../../../top-up/_modules/sections/top-up-form-section/payment.notification.dialog";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface PaymentDetailSheetTriggerProps {
  orderId: string;
}
export const PaymentDetailSheetTrigger: React.FC<
  PaymentDetailSheetTriggerProps
> = ({ orderId }): React.ReactElement => {
  const [data, setData] = React.useState<TTransaction | null>(null);
  const [snapLoaded, setSnapLoaded] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [snapToken, setSnapToken] = React.useState<string | null>(null);
  const searchParams = useSearchParams();

  const fetchData = React.useCallback(async () => {
    const transaction = await getUserTransactionById(orderId);
    setData(transaction);
  }, [orderId]);

  React.useEffect(() => {
    const snapScript = document.createElement("script");
    snapScript.src = process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL as string;
    snapScript.setAttribute(
      "data-client-key",
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY as string
    );
    snapScript.async = true;

    snapScript.onload = () => {
      setSnapLoaded(true);
    };

    document.body.appendChild(snapScript);

    return () => {
      document.body.removeChild(snapScript);
    };
  }, []);

  React.useEffect(() => {
    if (snapLoaded && snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          console.log("Payment success:", result);
          toast.success("Pembayaran Berhasil!");
        },
        onPending: function (result) {
          console.log("Payment pending:", result);
          toast.warning("Pembayaran Ditunda!");
        },
        onError: function (result) {
          console.error("Payment failed:", result);
          toast.error("Pembayaran Gagal!");
        },
        onClose: function () {
          toast.warning("Pembayaran ditutup, tanpa memenuhi transaksi!");
        },
      });
    }
    if (searchParams?.get("transaction_status") === "settlement") {
      setIsSuccess(true);
    } else if (searchParams?.get("transaction_status") === "pending") {
      setIsPending(true);
    } else if (
      searchParams?.get("transaction_status") === "expire" ||
      searchParams?.get("transaction_status") === "failed"
    ) {
      setIsFailed(true);
    }
  }, [snapLoaded, snapToken, searchParams]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (!data) {
    return <PaymentDetailSheetFallback />;
  }
  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const response = await getPaymentMidtrans(data.order_id);
      const snapToken = response.token;
      if (snapToken) {
        setSnapToken(snapToken as string);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat melakukan pembayaran", error);
      toast.error("Terjadi kesalahan saat melakukan pembayaran", {
        description: `${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const dateValue = data.updatedAt ? data.updatedAt : "-";

  const firstName = data.first_name;
  const lastName = data.last_name;
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
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
            <h1 className="text-base md:text-lg font-semibold py-2">
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
            <h1 className="text-base md:text-lg font-semibold py-2">
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
                <p>{data.payment_type.toUpperCase()}</p>
              </div>
              <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
                <strong className="w-[35%]">Tanggal Pembayaran</strong>
                {data.updatedAt ? (
                  <div className="flex flex-col">
                    <span>{dateValue}</span>
                  </div>
                ) : (
                  <p>Belum dibayar</p>
                )}
              </div>
              <div className="flex items-center gap-8 text-sm py-1.5 justify-start border-b border-neutral-200">
                <strong className="w-[35%]">Jumlah</strong>
                <p className="text-xl md:text-2xl font-bold text-sky-800">
                  {formatRupiah(data.gross_amount)}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end items-end gap-2 my-4">
              {/* <Button variant="outline">Lihat Invoice</Button> */}
              {data.status === "pending" ? (
                <Button onClick={handlePayment} disabled={isLoading}>
                  Bayar Sekarang
                </Button>
              ) : (
                <SheetClose asChild>
                  <Button>Tutup</Button>
                </SheetClose>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <PaymentNotificationDialog
        state="success"
        open={isSuccess}
        onOpenChange={setIsSuccess}
      />
      <PaymentNotificationDialog
        state="pending"
        open={isPending}
        onOpenChange={setIsPending}
      />
      <PaymentNotificationDialog
        state="failed"
        open={isFailed}
        onOpenChange={setIsFailed}
      />
    </>
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
