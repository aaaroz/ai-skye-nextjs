"use client";
import * as React from "react";
import { Edit2Icon, PlusIcon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminFeatureSchema,
  TAdminFeatureSchema,
  TPromptSchema,
} from "@/libs/entities";
import { toast } from "sonner";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AddPromptDialogTrigger } from "./add.prompt.dialog";
import { PromptCard } from "./prompt.card";
import { ScrollArea } from "@/components/ui/scroll-area";

const removeObjectAtIndex = (
  arr: TPromptSchema[],
  index: number
): TPromptSchema[] => {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const FormSection: React.FC<{ id?: string }> = ({
  id,
}): React.ReactElement => {
  const form = useForm<TAdminFeatureSchema>({
    resolver: zodResolver(adminFeatureSchema),
    defaultValues: {
      name: "",
      subDescription: "",
      description: "",
      category: "",
    },
  });
  const onSubmit = (values: TAdminFeatureSchema) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  const setPromptValue = React.useCallback(
    (values: TPromptSchema) => {
      const prompts: TPromptSchema[] = form.watch("prompts") || [];
      prompts.push(values);
      form.setValue("prompts", prompts);
    },
    [form]
  );

  const handleDeletePrompt = React.useCallback(
    (id: number) => {
      const prompts = form.watch("prompts");
      const newPrompts = removeObjectAtIndex(prompts, id);
      form.setValue("prompts", newPrompts);
    },
    [form]
  );

  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow-md bg-neutral-50 w-full h-fit">
      <HeadingWithIcon
        text={id ? "Edit Fitur" : "Tambahkan Fitur Baru"}
        icon={id ? <Edit2Icon /> : <PlusIcon />}
      />
      <Form {...form}>
        <form
          id="form-feature"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama fitur</FormLabel>
                  <FormControl>
                    <Input placeholder="Konten Menarik ...." {...field} />
                  </FormControl>
                  <FormDescription>Masukan nama fitur</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori fitur</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Kategori Fitur" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tiktok">Tiktok</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Kategori fitur yang relevan dengan fitur
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
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Masukan deskripsi yang menjelaskan fitur ini.."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Deskripsi ini akan tampil dihalaman generator AI sebagai
                    detail deskripsi dari fitur ini.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub-Deskripsi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Masukan sub deskripsi singkat tentang fitur ini.."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Sub Deskripsi ini akan tampil di card feature sebagai detail
                    headline dari fitur ini.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full space-y-1 col-span-1 lg:col-span-2">
              <h1 className="text-sm font-medium">Prompt AI</h1>
              <p className="text-sm text-muted-foreground">
                Buatkan perintah AI/Prompt AI untuk fitur ini.
              </p>
              {form.formState.errors["prompts"] && (
                <p className="text-sm text-red-600">
                  {form.formState.errors["prompts"].message}
                </p>
              )}
            </div>
            <ScrollArea className="h-[250px] w-full  col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AddPromptDialogTrigger onCreatePrompt={setPromptValue} />
                {form.watch("prompts")?.length ? (
                  form
                    .watch("prompts")
                    .map(({ name, description, category }, index) => (
                      <PromptCard
                        key={index}
                        name={name}
                        description={description}
                        category={category}
                        onClickCard={() => handleDeletePrompt(index)}
                      />
                    ))
                ) : (
                  <div className="flex flex-col justify-center items-center gap-2 rounded-lg border p-6 my-2 text-left text-sm transition-all bg-neutral-100">
                    <h1 className="font-semibold text-muted-foreground">
                      Belum ada prompt yang dibuat
                    </h1>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
          <div className="flex w-full gap-2 justify-end">
            <Button variant="secondary">Batalkan</Button>
            <Button form="form-feature" type="submit">
              {id ? "Simpan Perubahan" : "Tambahkan Fitur"}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
