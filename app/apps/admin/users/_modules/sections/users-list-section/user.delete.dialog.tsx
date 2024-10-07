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

interface UserDeleteTriggerProps {
  id: string;
  isOnSheet?: boolean;
}
export const UserDeleteTrigger: React.FC<UserDeleteTriggerProps> = ({
  id,
  isOnSheet,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDelete = () => {
    toast("You deleted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(id, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isOnSheet ? (
          <Button className="shrink-0" variant="destructive">
            <AlertCircleIcon size={16} className="mr-2.5" />
            Hapus Pengguna
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
            Data yang telah dihapus, tidak dapak dikembalikan secara permanen.
            Apakah anda yakin ingin menghapus nya?
          </DialogDescription>
          <DialogFooter className="flex gap-2 py-2">
            <DialogClose asChild>
              <Button variant="ghost">Tidak, kembali</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Ya, saya yakin!
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
