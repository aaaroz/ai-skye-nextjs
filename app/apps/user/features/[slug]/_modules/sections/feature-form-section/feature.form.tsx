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
import {
  baseApiUrl,
  featureAISchema,
  TFeatureAISchema,
  TPrompt,
} from "@/libs/entities";
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
import { useGenerateAI } from "@/libs/hooks";
import { getSession } from "next-auth/react";

const emptyPrompt: TPrompt = {
  nameprompt: "",
  prompt: "",
  categoryprompt: "",
};

export const FeatureForm: React.FC<{
  promptsData: TPrompt[];
  featureName: string;
}> = ({ promptsData, featureName }): React.ReactElement => {
  const [selectedPrompt, setSelectedPrompt] =
    React.useState<TPrompt>(emptyPrompt);

  const form = useForm<TFeatureAISchema>({
    resolver: zodResolver(featureAISchema),
    defaultValues: {
      featureName,
      maxToken: 3000,
      productCategory: "makanan",
      productName: "",
      prompt: "",
    },
  });
  const { setResultText, setIsGenerating } = useGenerateAI();
  const onSubmit = async (values: TFeatureAISchema) => {
    setResultText(""); // Clear the previous result
    try {
      const session = await getSession();
      const token = session?.user.token;
      if (!token) {
        throw new Error("401 - Unauthorized!");
      }
      setIsGenerating(true);
      const response = await fetch(`${baseApiUrl}/api/send-prompt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          categoryname: "Instagram",
          featuresname: "Perubahan",
          prompt: values.prompt,
          max_words: 100,
          brandName: "Brand kurse",
        }),
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }
      const reader = response.body ? response.body.getReader() : null;
      if (!reader) {
        throw new Error("Response body is null, unable to read stream.");
      }

      let { value, done } = await reader.read();
      const decoder = new TextDecoder("utf-8");
      let combinedMessage = ""; // Final message to store for logging

      while (!done) {
        const chunk = decoder.decode(value, { stream: true });
        const messages = chunk.match(/{.*?}/g); // Match JSON objects
        if (messages) {
          messages.forEach((message) => {
            const msgObj = JSON.parse(message);

            // Only show each word, not the final message
            if (!msgObj.success) {
              setResultText((prev) => prev + msgObj.message + " "); // Append the message content
            } else {
              // Store the final combined message for logging (don't show in UI)
              combinedMessage = msgObj.message;
            }
          });
        }

        ({ value, done } = await reader.read());
      }
      toast.success("Response AI Telah didapatkan!");

      // Log final message for debugging purposes, not for UI display
      console.log("Final combined message:", combinedMessage);
    } catch (error) {
      console.error("Error:", error);
      setResultText(`Error: ${error as string}`);
    } finally {
      setIsGenerating(false);
    }
  };

  React.useEffect(() => {
    if (selectedPrompt) {
      form.setValue("prompt", selectedPrompt.prompt);
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
            promptsData={promptsData}
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
