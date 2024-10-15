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
import { personalDataSchema, TPersonalDataSchema } from "@/libs/entities";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { DateTimePicker } from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/libs/utils";
import { useProfileData } from "@/libs/hooks";
import { updateProfile, verifyOtpUpdateProfile } from "@/libs/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const payloadVerifyInit = {
  userId: "",
  enteredOtp: "",
  oldPhoneNumber: "",
};

export const PersonalDataForm: React.FC = (): React.ReactElement => {
  const [payloadVerify, setPayloadVerify] = React.useState(payloadVerifyInit);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<TPersonalDataSchema>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      position: "",
      company: "",
      city: "",
    },
  });
  const { profileData, toggleShouldFetchData } = useProfileData();
  const onSubmit = async (values: TPersonalDataSchema) => {
    try {
      const res = await updateProfile(values);
      if (res.status === "otp_required") {
        toast.success("Anda mengubah nomor telepon anda!", {
          description: res.message,
        });

        setPayloadVerify({
          userId: res.userId as string,
          enteredOtp: "",
          oldPhoneNumber: res.oldPhoneNumber as string,
        });
        setIsOpen(true);
      } else {
        toast.success("Data profile berhasil diperbarui!");
        toggleShouldFetchData(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat mengupdate profile", {
        description: `${error}`,
      });
    }
  };

  const handleSubmitOtp = async () => {
    try {
      setIsLoading(true);
      const res = await verifyOtpUpdateProfile({
        codeVerification: payloadVerify.enteredOtp,
        userId: payloadVerify.userId,
      });
      toast.success("OTP telah diverifikasi, Nomor Telepon anda telah diubah", {
        description: res,
      });
      toggleShouldFetchData(true);
    } catch (error) {
      console.error(error);
      toast.error("Terjadi Kesalahan saat memverifikasi otp", {
        description: `${error}`,
      });
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  const setValues = React.useCallback(() => {
    if (profileData) {
      form.setValue("fullName", profileData.name);
      form.setValue("phoneNumber", profileData.phoneNumber);
      form.setValue("position", profileData.jabatan);
      form.setValue("company", profileData.perusahaan);
      form.setValue("city", profileData.kota);
      form.setValue(
        "birthDate",
        profileData.tempatTanggalLahir
          ? new Date(profileData.tempatTanggalLahir)
          : new Date()
      );
      form.setValue(
        "avatar",
        profileData?.image_url?.length > 0
          ? profileData?.image_url
          : "/avatars/avatar-male.png"
      );
    }
  }, [form, profileData]);

  React.useEffect(() => {
    setValues();
  }, [setValues]);
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 rounded-md shadow-md bg-neutral-50 w-full h-fit lg:w-[40%]">
      <h1 className="text-xl md:text-2xl font-bold">Data Pribadi</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">
                  Nama Lengkap
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Masukan nama lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">
                  Nomor Telepon
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Masukan nomor telepon" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">Jabatan</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Masukan jabatan" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">
                  Perusahaan
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Masukan perusahaan" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">Kota</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Masukan kota" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">
                  Tanggal Lahir
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <DateTimePicker
                      placeholder="Pilih Tanggal"
                      granularity="day"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem className="space-y-3 flex items-center gap-2 justify-start">
                <FormLabel className="font-semibold w-[45%]">
                  Pilih Avatar
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="w-full flex justify-start items-center">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="/avatars/avatar-male.png"
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel>
                          <Avatar
                            className={cn("w-[45px] h-[45px] cursor-pointer", {
                              "border-2 border-neutral-800":
                                form.watch("avatar") ===
                                "/avatars/avatar-male.png",
                            })}
                          >
                            <AvatarFallback className="text-4xl text-foreground">
                              AV
                            </AvatarFallback>
                            <AvatarImage
                              src="/avatars/avatar-male.png"
                              alt="avatar-user"
                            />
                          </Avatar>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="/avatars/avatar-female.png"
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel>
                          <Avatar
                            className={cn("w-[45px] h-[45px] cursor-pointer", {
                              "border-2 border-neutral-800":
                                form.watch("avatar") ===
                                "/avatars/avatar-female.png",
                            })}
                          >
                            <AvatarFallback className="text-4xl text-foreground">
                              AV
                            </AvatarFallback>
                            <AvatarImage
                              src="/avatars/avatar-female.png"
                              alt="avatar-user"
                            />
                          </Avatar>
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end pt-2 gap-2">
            <Button
              type="reset"
              variant="secondary"
              className="bg-neutral-200"
              onClick={() => setValues()}
            >
              Batalkan
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Simpan
            </Button>
          </div>
        </form>
      </Form>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verifikasi OTP!</DialogTitle>
            <DialogDescription>
              Anda mengubah nomor telepon anda, silahkan buka WhatsApp nomor
              telepon lama, kami telah mengirimkan OTP ke nomor tersebut.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="otp" className="text-right">
              Kode OTP
            </Label>
            <Input
              id="otp"
              defaultValue="xxxxxx"
              value={payloadVerify.enteredOtp}
              onChange={(e) =>
                setPayloadVerify({
                  ...payloadVerify,
                  enteredOtp: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={handleSubmitOtp}
              disabled={isLoading}
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
