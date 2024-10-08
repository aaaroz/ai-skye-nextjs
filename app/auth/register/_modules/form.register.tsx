"use client";
import * as React from "react";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { registerSchema, type TRegisterSchema } from "@/libs/entities";
import { Checkbox } from "@/components/ui/checkbox";
import { decryptPhoneNumber, encryptPhoneNumber } from "@/libs/utils";
import { useRouter } from "next/navigation";

export const dataUserRegister = {
  phoneNumber: "",
  encryptedPhoneNumber: "",
};

export const FormRegister: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    },
    mode: "all",
  });

  const onSubmit = (data: TRegisterSchema) => {
    const encryptedPhoneNumber = encryptPhoneNumber(data.phoneNumber);
    //TODO = SEND OTP

    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-800 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const phoneNumber = decryptPhoneNumber(encryptedPhoneNumber);
    if (phoneNumber.length < 10) {
      toast.error("Gagal mengirim kode verifikasi, coba lagi!");
    } else {
      dataUserRegister.phoneNumber = phoneNumber;
      dataUserRegister.encryptedPhoneNumber = encryptedPhoneNumber;
      router.push(`/auth/verify?token=${encryptedPhoneNumber}`);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-xs md:text-sm">
                  Nama Lengkap
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Masukkan Nama Lengkap"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage className="capitalize text-xs dark:text-red-500" />
              </FormItem>
            )}
          />
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
                <FormMessage className="capitalize text-xs dark:text-red-500" />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="termsAndConditions"
            render={({ field }) => (
              <FormItem className="items-start flex space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="leading-none">
                  <FormLabel className="text-sm font-medium">
                    Ketentuan dan Kebijakan Privasi
                  </FormLabel>
                  <FormDescription className="text-xs text-muted-foreground">
                    Anda setuju dengan{" "}
                    <Link
                      href="/terms-condition"
                      className="text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
                    >
                      Persyaratan dan Ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-sky-600 hover:text-sky-600/70 font-medium transition-colors duration-200"
                    >
                      Kebijakan Privasi
                    </Link>{" "}
                    yang berlaku.
                  </FormDescription>
                  <FormMessage className="capitalize text-xs dark:text-red-500" />
                </div>
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
            Lanjutkan{" "}
            {form.formState.isSubmitting ? (
              <Loader2Icon className="ml-3 animate-spin" />
            ) : (
              ""
            )}
          </Button>
          <div className="flex justify-between items-center text-sm">
            <p>Sudah punya akun?</p>
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
