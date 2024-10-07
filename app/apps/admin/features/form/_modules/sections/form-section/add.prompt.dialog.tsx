"use client";
import * as React from "react";
import { FilePlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/libs/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { promptSchema, TPromptSchema } from "@/libs/entities";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddPromptDialogTriggerProps {
  onCreatePrompt: (values: TPromptSchema) => void;
}

export const AddPromptDialogTrigger: React.FC<AddPromptDialogTriggerProps> = ({
  onCreatePrompt,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const form = useForm<TPromptSchema>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });
  const onSubmit = (values: TPromptSchema) => {
    onCreatePrompt(values);
    form.reset();
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex flex-col justify-center w-full items-center gap-2 rounded-lg border p-6 my-2 text-left text-sm transition-all bg-neutral-100 hover:bg-neutral-200"
          )}
        >
          <h1 className="font-semibold">Tambahkan Prompt AI</h1>
          <FilePlusIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Prompt</DialogTitle>
          <DialogDescription>
            Berikan beberapa detail prompt/perintah AI yang akan ditambahkan.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="form-add-prompt"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="w-full space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama prompt</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: Ide konten video ..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Masukan nama prompt</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori produk</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Kategori produk" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="makanan">Makanan</SelectItem>
                        <SelectItem value="minuman">Minuman</SelectItem>
                        <SelectItem value="pakaian">Pakaian</SelectItem>
                        <SelectItem value="aksesoris">Aksesoris</SelectItem>
                        <SelectItem value="elektronik">
                          Alat Elektronik
                        </SelectItem>
                        <SelectItem value="kosmetik">Alat Kosmetik</SelectItem>
                        <SelectItem value="perawatan-kulit">
                          Alat Perawatan Kulit {`(Skincare)`}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Kategori produk yang relevan dengan produk
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Isi Perintah AI</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ex: Buatkan ide konten video tiktok family friendly untuk mempromosikan produk makanan yang bernama {productName} "
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Masukan isi prompt yang akan digunakan untuk generate AI.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button form="form-add-prompt" type="submit">
            Tambahkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
