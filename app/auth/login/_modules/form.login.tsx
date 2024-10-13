"use client";
import * as React from "react";
import Link from "next/link";
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
import { loginSchema, type TLoginSchema } from "@/libs/entities";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  getCredentials,
  login,
  removeCredentials,
  storeCredentials,
} from "@/libs/actions";

export const FormLogin: React.FC = (): React.ReactElement => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      isRememberMe: false,
    },
    mode: "all",
  });

  const onSubmit = async (data: TLoginSchema) => {
    try {
      await login(data);
      if (data.isRememberMe) {
        await storeCredentials(data.phoneNumber, data.password);
      } else {
        await removeCredentials();
      }
      toast.success("Login Berhasil!, Selamat datang di KontenKilat!");
    } catch (error) {
      console.error(error);
      toast.error("Login gagal, silahkan coba lagi!", {
        description: (error as Error).message,
      });
    }
  };

  const checkCredentials = React.useCallback(async () => {
    const credentials = await getCredentials();
    if (credentials) {
      form.setValue("isRememberMe", true);
      form.setValue("phoneNumber", credentials.phoneNumber);
      form.setValue("password", credentials.password);
    }
  }, [form]);

  React.useEffect(() => {
    checkCredentials();
  }, [checkCredentials]);

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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="pt-4">
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
                <FormMessage className="capitalize text-xs md:text-sm dark:text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="isRememberMe"
              render={({ field }) => (
                <FormItem className="items-center flex space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="leading-none">
                    <FormLabel className="text-sm font-medium">
                      Ingatkan saya
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Link
              href="/auth/forgot-password"
              className="text-sm text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Lupa kata sandi?
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Button
            type="submit"
            size="sm"
            className="w-full text-sm"
            disabled={form.formState.isSubmitting}
          >
            Masuk{" "}
            {form.formState.isSubmitting ? (
              <Loader2Icon className="ml-3 animate-spin" />
            ) : (
              ""
            )}
          </Button>
          <div className="flex justify-between items-center text-sm">
            <p>Tidak punya akun?</p>
            <Link
              href="/auth/register"
              className="text-sm text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
            >
              Daftar disini
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};
