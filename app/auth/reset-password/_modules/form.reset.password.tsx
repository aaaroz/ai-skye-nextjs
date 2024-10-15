"use client";
import * as React from "react";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
  resetPasswordSchema,
  type TResetPasswordSchema,
} from "@/libs/entities";
import { login, resetPassword } from "@/libs/actions";

export const FormResetPassword: React.FC<{
  id: string;
  phoneNumber: string;
}> = ({ id, phoneNumber }): React.ReactElement => {
  const form = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      userId: id,
    },
    mode: "all",
  });

  const onSubmit = async (data: TResetPasswordSchema) => {
    try {
      const res = await resetPassword(data);
      await login({ phoneNumber, password: data.password });
      toast.success(res.message);
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengubah password baru, silahkan coba lagi!", {
        description: (error as Error).message,
      });
    } finally {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-xs md:text-sm">
                  Kata Sandi
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Masukkan Kata Sandi"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage className="capitalize text-xs dark:text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-xs md:text-sm">
                  Konfirmasi Kata Sandi
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Masukkan Konfirmasi Kata Sandi"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage className="capitalize text-xs dark:text-red-500" />
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
            Simpan{" "}
            {form.formState.isSubmitting ? (
              <Loader2Icon className="ml-3 animate-spin" />
            ) : (
              ""
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
