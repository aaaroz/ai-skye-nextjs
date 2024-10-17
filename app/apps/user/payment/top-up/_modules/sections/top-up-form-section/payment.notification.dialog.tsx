import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert.dialog";
import { useRouter } from "next/navigation";
import { dashboardUserRoute } from "@/libs/entities";
import { AlertCircleIcon, CheckCircleIcon } from "lucide-react";

const iconSize = 18;

interface PaymentNotificationDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  state: "success" | "pending" | "failed";
}
export const PaymentNotificationDialog: React.FC<
  PaymentNotificationDialogProps
> = ({ open, onOpenChange, state }): React.ReactElement => {
  const router = useRouter();
  const getStateTitle =
    state === "success"
      ? "Berhasil"
      : state === "pending"
      ? "Ditunda"
      : "Gagal";
  const getStateIcon =
    state === "success" ? (
      <CheckCircleIcon size={iconSize} />
    ) : (
      <AlertCircleIcon size={iconSize} />
    );

  const getStateDesc =
    state === "success"
      ? "Pembayaran anda telah diproses, silahkan tunggu beberapa saat untuk mengecek kembali Kata anda!"
      : state === "pending"
      ? "Pembayaran anda ditunda, silahkan lakukan pembayaran terlebih dahulu untuk melanjutkan top up Kata anda!"
      : "Pembayaran anda gagal, silahkan hubungi tim support untuk info lebih lanjut!";
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="inline-flex items-center gap-2">
            {getStateIcon} Pembayaran {getStateTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>{getStateDesc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => router.push(dashboardUserRoute.concat("payment"))}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
