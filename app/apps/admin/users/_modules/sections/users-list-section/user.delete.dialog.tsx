"use client";
import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActionButton } from "@/components/dashboard-page";
import { AlertCircleIcon, UserXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { blockUser } from "@/libs/actions";

interface UserDeleteTriggerProps {
  id: string;
  isOnSheet?: boolean;
}
export const UserDeleteTrigger: React.FC<UserDeleteTriggerProps> = ({
  id,
  isOnSheet,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const res = await blockUser(id);
      toast.success("Pengguna telah diblokir!", {
        description: res,
      });
    } catch (error) {
      console.error(error);
      toast.error("Gagal memblokir Pengguna!", {
        description: `${error}`,
      });
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isOnSheet ? (
          <Button className="shrink-0" variant="destructive">
            <AlertCircleIcon size={16} className="mr-2.5" />
            Block Pengguna
          </Button>
        ) : (
          <ActionButton className="shrink-0" variant="destructive">
            <UserXIcon size={16} />
          </ActionButton>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apakah anda yakin?</DialogTitle>
          <DialogDescription>
            Pengguna yang telah di block tidak dapat masuk kembali ke dashboard kontenkilat, dan tidak dapat membuat akun kembali dengan nomor telepon yang sama, apakah anda yakin ingin mem-block pengguna ini?
          </DialogDescription>
          <DialogFooter className="flex gap-2 py-2">
            <DialogClose asChild>
              <Button variant="default">Tidak, kembali</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              title="Block Pengguna ini"
              disabled={isLoading}
            >
              Ya, saya yakin!
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
