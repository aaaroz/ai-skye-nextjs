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
import {
  forgotPasswordInit,
  getDataRegisterFromCookie,
  login,
  register,
  removeDataRegisterFromCookie,
  verifyOtpForgotPassword,
  verifyOtpRegister,
} from "@/libs/actions";
import { useRouter } from "next/navigation";

export const FormVerify: React.FC<{
  id: string;
  token?: string;
  phoneNumber: string;
}> = ({ id, token, phoneNumber }): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const form = useForm<TVerifySchema>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      codeVerification: "",
      userId: id,
    },
    mode: "all",
  });

  const onSubmit = async (data: TVerifySchema) => {
    try {
      if (token === "forg0t") {
        const res = await verifyOtpForgotPassword(data);
        toast.success(res.message);
        router.push(
          `/auth/reset-password?userId=${res.userId}&phoneNumber=${phoneNumber}`
        );
      } else {
        const res = await verifyOtpRegister(data);
        const { phoneNumber, password } = await getDataRegisterFromCookie();
        await login({ phoneNumber, password });
        toast.success(res.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Gagal memverifikasi otp, silahkan coba lagi!", {
        description: (error as Error).message,
      });
    } finally {
      await removeDataRegisterFromCookie();
    }
  };

  const handleResendOtp = async (forgotPhoneNumber: string) => {
    try {
      setIsLoading(true);
      if (token === "forg0t") {
        await forgotPasswordInit({
          phoneNumber: forgotPhoneNumber,
        });
        toast.success(
          `Kode OTP Telah dikirimkan ke Nomor ${forgotPhoneNumber}`,
          { description: "Cek kembali whatsApp anda" }
        );
        return;
      }
      const { phoneNumber, name, password } = await getDataRegisterFromCookie();

      if (!phoneNumber && !name && !password) {
        toast.error(
          "Gagal mengirim ulang otp, silahkan daftar kembali melalui halaman register."
        );
        router.push("/auth/register");
      }
      const res = await register({
        phoneNumber,
        name,
        password,
        confirmPassword: password,
        termsAndConditions: true,
      });
      toast.success("Kode OTP Telah dikirimkan melalui WhatsApp anda");
      router.push(
        `/auth/verify?userId=${res.id}&phoneNumber=${res.phoneNumber}`
      );
    } catch (error) {
      console.log(error);
      toast.error("Register gagal, silahkan coba lagi!", {
        description: (error as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
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
              disabled={isLoading}
              onClick={() => handleResendOtp(phoneNumber)}
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
