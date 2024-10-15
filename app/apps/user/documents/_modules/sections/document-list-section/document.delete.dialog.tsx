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
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useProfileData } from "@/libs/hooks";
import { deleteDocument } from "@/libs/actions/document/delete-document";

interface DocumentDeleteTriggerProps {
  id: string;
}
export const DocumentDeleteTrigger: React.FC<DocumentDeleteTriggerProps> = ({
  id,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleShouldFetchData } = useProfileData();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteDocument(id);
      toast.success("Dokumen telah dihapus!");
      toggleShouldFetchData(true);
    } catch (error) {
      console.error(error);
      toast.error("Gagal menghapus dokumen!", {
        description: `${error}`,
      });
    } finally {
      setIsOpen(false);
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <ActionButton className="shrink-0" variant="destructive">
          <Trash2Icon size={16} />
        </ActionButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apakah anda yakin?</DialogTitle>
          <DialogDescription>
            Data pengguna yang telah dihapus, tidak dapat dikembalikan secara
            permanen dan semua data yang terkait dengan pengguna ini akan
            dihapus. Apakah anda yakin ingin menghapus nya?
          </DialogDescription>
          <DialogFooter className="flex gap-2 py-2">
            <DialogClose asChild>
              <Button variant="default">Tidak, kembali</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              title="Hapus Dokumen"
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
