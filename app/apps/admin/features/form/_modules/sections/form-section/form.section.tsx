"use client";
import * as React from "react";
import { Edit2Icon, Loader2Icon, PlusIcon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminFeatureSchema,
  dashboardAdminRoute,
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
import { addFeature, getFeatureById, updateFeature } from "@/libs/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useFeatures } from "@/libs/hooks";

const removeObjectAtIndex = (
  arr: TPromptSchema[],
  index: number
): TPromptSchema[] => {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const FormSection: React.FC = (): React.ReactElement => {
  const searchParams = useSearchParams()
  const id = searchParams?.get('editId')
  const router = useRouter();
  const { toggleShouldFetchData } = useFeatures();
  const form = useForm<TAdminFeatureSchema>({
    resolver: zodResolver(adminFeatureSchema),
    defaultValues: {
      name: "",
      subDescription: "",
      description: "",
      category: "",
    },
  });
  const onSubmit = async (values: TAdminFeatureSchema) => {
    try {
      if (id) {
        const res = await updateFeature({ ...values, id });
        toast.success("Berhasil mengupdate data fitur", {
          description: `${res.featuresname} telah diupdate`,
        });
        router.push(dashboardAdminRoute.concat("features"));
        toggleShouldFetchData(true);
      } else {
        const res = await addFeature({ ...values });
        toast.success("Berhasil menambahkan data fitur", {
          description: `${res.featuresname} telah ditambahkan`,
        });
        router.push(dashboardAdminRoute.concat("features"));
        toggleShouldFetchData(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat mengupdate data", {
        description: `${error}`,
      });
    }
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

  const fetchFeature = React.useCallback(async () => {
    const feature = await getFeatureById(id as string);
    form.setValue("name", feature.featuresname);
    form.setValue("description", feature.deskripsi);
    form.setValue("subDescription", feature.subdeskripsi as string);
    form.setValue("category", feature.categoryname.toLowerCase());
    form.setValue("prompts", feature.data);
  }, [form, id]);

  React.useEffect(() => {
    if (id) {
      fetchFeature();
    }
  }, [fetchFeature, id]);

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
          <div className="w-full grid  lg:grid-cols-2 gap-6">
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
                    .map(({ nameprompt, prompt, categoryprompt }, index) => (
                      <PromptCard
                        key={index}
                        name={nameprompt}
                        description={prompt}
                        category={categoryprompt}
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
            <Button
              form="form-feature"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {id ? "Simpan Perubahan" : "Tambahkan Fitur"}
              {form.formState.isSubmitting ? (
                <Loader2Icon className="ml-3 animate-spin" />
              ) : (
                ""
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
