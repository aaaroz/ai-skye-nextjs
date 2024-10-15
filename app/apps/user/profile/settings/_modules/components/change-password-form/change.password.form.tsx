"use client";
import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { changePasswordSchema, TChangePasswordSchema } from "@/libs/entities";
import { Button } from "@/components/ui/button";
import { updatePassword } from "@/libs/actions";

export const ChangePasswordForm: React.FC = (): React.ReactElement => {
  const form = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: TChangePasswordSchema) => {
    try {
      const res = await updatePassword(values);
      toast.success("Kata sandi anda telah diperbarui!", {
        description: res,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Gagal memperbarui kata sandi!", {
        description: error as string,
      });
    }
  };
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 rounded-md shadow-md overflow-auto bg-neutral-50 w-full h-fit lg:w-[60%]">
      <h1 className="text-xl md:text-2xl font-bold">Ganti Kata Sandi</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start py-2">
                <FormLabel className="font-semibold w-[45%]">
                  Kata sandi sekarang
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukan Kata sandi sekarang"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start py-2">
                <FormLabel className="font-semibold w-[45%]">
                  Kata sandi baru
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukan Kata sandi baru"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start py-2">
                <FormLabel className="font-semibold w-[45%]">
                  Konfirmasi Kata sandi baru
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukan Konfirmasi Kata sandi baru"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="w-full flex justify-end gap-2">
            <Button
              type="reset"
              variant="secondary"
              className="bg-neutral-200"
              onClick={() => form.reset()}
            >
              Batalkan
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Simpan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
