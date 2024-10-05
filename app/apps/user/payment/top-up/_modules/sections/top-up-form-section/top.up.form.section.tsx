"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { MinusIcon, PlusIcon } from "lucide-react";
import { formatRupiah } from "@/libs/utils";
import { topUpSchema, TTopUpSchema } from "@/libs/entities";

const packagePrice = 10000;

export const TopUpFormSection: React.FC = (): React.ReactElement => {
  const form = useForm<TTopUpSchema>({
    resolver: zodResolver(topUpSchema),
    defaultValues: {
      email: "",
      qty: 1,
      total: 10000,
    },
  });

  const onSubmit = (values: TTopUpSchema) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="w-full md:w-[40%] border border-neutral-200 p-4 rounded space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: john@example.org" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Masukan email kamu, untuk mendapatkan notifikasi pembayaran
                    dari kami.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <h1 className="text-sm md:text-base font-semibold">Paket Kata</h1>
              <div className="flex flex-col items-start gap-1.5 rounded-lg p-3 text-left text-sm transition-all border bg-neutral-100">
                <h1 className="text-lg font-semibold">Paket Hemat</h1>
                <p className="text-xs md:text-sm">
                  Dengan paket hemat, anda akan mendapatkan 10.000 Kata yang
                  dapat digunakan untuk menghasilkan ide konten menarik dengan
                  mudah.
                </p>
                <p className="text-2xl font-semibold text-sky-800 w-full text-right">
                  {formatRupiah(packagePrice)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] space-y-4">
            <div className="w-full h-fit border border-neutral-200 p-4 rounded space-y-4">
              <h1 className="text-sm md:text-base font-semibold">
                Ringkasan Pembelian
              </h1>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between w-full items-center">
                  <p>Jumlah Paket</p>
                  <div className="flex gap-1.5 max-w-xs items-center">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => {
                        form.setValue("qty", form.watch("qty") - 1);
                        form.setValue(
                          "total",
                          form.watch("qty") * packagePrice
                        );
                      }}
                      disabled={form.watch("qty") === 1}
                    >
                      <MinusIcon size={16} />
                    </Button>
                    <Input
                      value={form.watch("qty")}
                      onChange={(e) => {
                        form.setValue("qty", Number(e.target.value));
                        form.setValue(
                          "total",
                          Number(e.target.value) * packagePrice
                        );
                      }}
                      className="w-[60px]"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => {
                        form.setValue("qty", form.watch("qty") + 1);
                        form.setValue(
                          "total",
                          form.watch("qty") * packagePrice
                        );
                      }}
                    >
                      <PlusIcon size={16} />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p>Token</p>
                  <strong>
                    {formatRupiah(packagePrice * form.watch("qty")).replace(
                      "Rp",
                      ""
                    )}
                  </strong>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p>Subtotal</p>
                  <strong>{formatRupiah(form.watch("total"))}</strong>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p>
                    Pajak <span className="text-neutral-200">{`(0%)`}</span>
                  </p>
                  <strong>{formatRupiah(0)}</strong>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between w-full items-center">
                <h1 className="text-lg md:text-xl font-semibold">
                  Total Pembayaran
                </h1>
                <strong className="text-xl sm:text-2xl md:text-3xl text-sky-800">
                  {formatRupiah(form.watch("total"))}
                </strong>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Checkout Sekarang
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
