"use client";
import * as React from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { verifySchema, type TVerifySchema } from "@/libs/entities";

export const FormVerify = () => {
  const form = useForm<TVerifySchema>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      codeVerification: "",
    },
    mode: "all",
  });

  const onSubmit = (data: TVerifySchema) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="codeVerification"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-xs md:text-sm">
                  Kode Verifikasi
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Masukkan Kode Verifikasi"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage className="capitalize text-xs md:text-sm dark:text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <Button
            type="submit"
            size="sm"
            className="w-full text-sm"
            disabled={form.formState.isSubmitting}
          >
            Kirim{" "}
            {form.formState.isSubmitting ? (
              <Loader2Icon className="ml-3 animate-spin" />
            ) : (
              ""
            )}
          </Button>
          <div className="flex justify-between items-center text-sm">
            <p>Tidak Menerima Kode Verifikasi?</p>
            <Button
              variant="link"
              className="px-0 text-sm hover:no-underline text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Kirim Ulang
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
