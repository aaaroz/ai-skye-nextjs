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

export const FormResetPassword = () => {
  const form = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const onSubmit = (data: TResetPasswordSchema) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-800 p-4">
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
