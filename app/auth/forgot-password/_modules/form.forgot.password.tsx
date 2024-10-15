"use client";
import * as React from "react";
import Link from "next/link";
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
import {
  forgotPasswordSchema,
  type TForgotPasswordSchema,
} from "@/libs/entities";
import { useRouter } from "next/navigation";
import { forgotPasswordInit } from "@/libs/actions";

export const FormForgotPassword: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const form = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phoneNumber: "",
    },
    mode: "all",
  });

  const onSubmit = async (data: TForgotPasswordSchema) => {
    try {
      const res = await forgotPasswordInit(data);
      toast.success("Kode OTP Telah dikirimkan melalui WhatsApp anda");
      router.push(
        `/auth/verify?userId=${res.userId}&phoneNumber=${data.phoneNumber}&token=forg0t`
      );
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengirim OTP, silahkan coba lagi!", {
        description: (error as Error).message,
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-xs md:text-sm">
                  Nomor Telepon {`(WhatsApp)`}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Masukkan Nomor Telepon"
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
            <p>Ingat kata sandi anda?</p>
            <Link
              href="/auth/login"
              className="text-sm text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Masuk disini
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};
