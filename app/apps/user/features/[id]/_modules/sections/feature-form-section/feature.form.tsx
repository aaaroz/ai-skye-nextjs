"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { featureAISchema, TFeatureAISchema, TPrompt } from "@/libs/entities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FeaturePromptList } from "./feature.prompt.list";
import { toast } from "sonner";

const emptyPrompt = {
  title: "",
  description: "",
  category: "",
};

export const FeatureForm: React.FC = (): React.ReactElement => {
  const [selectedPrompt, setSelectedPrompt] =
    React.useState<TPrompt>(emptyPrompt);

  const form = useForm<TFeatureAISchema>({
    resolver: zodResolver(featureAISchema),
    defaultValues: {
      maxToken: 3000,
      productCategory: "makanan",
      productName: "",
      prompt: "",
    },
  });
  const onSubmit = (values: TFeatureAISchema) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  React.useEffect(() => {
    if (selectedPrompt) {
      form.setValue("prompt", selectedPrompt.description);
    }
  }, [selectedPrompt, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama produk</FormLabel>
                <FormControl>
                  <Input placeholder="Kicimpring Renyah" {...field} />
                </FormControl>
                <FormDescription>Masukan nama produkmu</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori produk</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kategori Produk" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="makanan">Makanan</SelectItem>
                    <SelectItem value="minuman">Minuman</SelectItem>
                    <SelectItem value="pakaian">Pakaian</SelectItem>
                    <SelectItem value="aksesoris">Aksesoris</SelectItem>
                    <SelectItem value="elektronik">Alat Elektronik</SelectItem>
                    <SelectItem value="kosmetik">Alat Kosmetik</SelectItem>
                    <SelectItem value="perawatan-kulit">
                      Alat Perawatan Kulit {`(Skincare)`}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Pilih kategori produkmu</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxToken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maksimal kata</FormLabel>
                <FormControl>
                  <Input placeholder="Maksimal kata" {...field} />
                </FormControl>
                <FormDescription>
                  Masukan maksimal kata yang akan digunakan
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perintah AI</FormLabel>
                <FormControl>
                  <Textarea placeholder="Buatkan saya konten..." {...field} />
                </FormControl>
                <FormDescription>
                  Masukan perintah AI atau pilih perintah AI dari list Prompt AI
                  dibawah ini
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FeaturePromptList
            productName={form.watch("productName")}
            selectedCategory={form.watch("productCategory")}
            selectedPrompt={selectedPrompt as TPrompt}
            onSelectPrompt={setSelectedPrompt}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
