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
import { deleteFeature } from "@/libs/actions";
import { useFeatures } from "@/libs/hooks";

interface FeatureDeleteTriggerProps {
  id: string;
}
export const FeatureDeleteTrigger: React.FC<FeatureDeleteTriggerProps> = ({
  id,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleShouldFetchData } = useFeatures();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteFeature(id);
      toast.success("Fitur telah dihapus!");
      toggleShouldFetchData(true);
    } catch (error) {
      console.error(error);
      toast.error("Gagal menghapus fitur!", {
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
        <ActionButton variant="destructive" className="shrink-0">
          <Trash2Icon size={16} />
        </ActionButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apakah anda yakin?</DialogTitle>
          <DialogDescription>
            Fitur yang telah dihapus, tidak dapat dikembalikan secara permanen.
            Apakah anda yakin ingin menghapus nya?
          </DialogDescription>
          <DialogFooter className="flex gap-2 py-2">
            <DialogClose asChild>
              <Button variant="default">Tidak, kembali</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              title="Hapus Fitur"
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
