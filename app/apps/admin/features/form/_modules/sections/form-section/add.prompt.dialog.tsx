"use client";
import * as React from "react";
import { FilePlusIcon } from "lucide-react";
import * as papa from "papaparse";
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
import { promptSchema, TPrompt, TPromptSchema } from "@/libs/entities";
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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AddPromptDialogTriggerProps {
  onCreatePrompt: (values: TPromptSchema) => void;
}

export const AddPromptDialogTrigger: React.FC<AddPromptDialogTriggerProps> = ({
  onCreatePrompt,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [importedData, setImportedData] = React.useState<TPrompt[]>([]);
  const form = useForm<TPromptSchema>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      nameprompt: "",
      prompt: "",
      categoryprompt: "",
    },
  });
  const onSubmit = (values: TPromptSchema) => {
    onCreatePrompt(values);
    form.reset();
    setIsOpen(false);
  };

  const handleImportCsv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      papa.parse(file as File, {
        header: true,
        complete: (res: papa.ParseResult<TPrompt>) => {
          setImportedData(res.data);
        },
      });
    }
  };

  React.useEffect(() => {
    if (importedData) {
      importedData.forEach((item) => {
        onCreatePrompt(item);
      });
      setIsOpen(false);
    }
  }, [importedData,onCreatePrompt]);
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
          <DialogDescription className="sr-only">
            Berikan beberapa detail prompt/perintah AI yang akan ditambahkan.
          </DialogDescription>
        </DialogHeader>
        <div className="space-x-2 items-center flex">
          <Label>Import prompt via csv</Label>
          <Input
            name="import-prompt"
            accept=".csv"
            type="file"
            onChange={handleImportCsv}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          <Separator className="w-1/4" />
          <span className="place-items-center text-xs">
            Atau tambahkan manual
          </span>
          <Separator className="w-1/4" />
        </div>
        <Form {...form}>
          <form
            id="form-add-prompt"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="w-full space-y-4">
              <FormField
                control={form.control}
                name="nameprompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama prompt</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: Ide konten video ..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryprompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Kategori prompt" />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prompt"
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
            <DialogFooter>
              <Button
                form="form-add-prompt"
                type="button"
                onClick={form.handleSubmit(onSubmit)}
              >
                Tambahkan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
