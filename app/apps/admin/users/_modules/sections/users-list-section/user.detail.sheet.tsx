import * as React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ActionButton } from "@/components/dashboard-page";
import { FileTextIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserDeleteTrigger } from "./user.delete.dialog";
import { Button } from "@/components/ui/button";
import { TUserAdminDashboard } from "@/libs/actions/users/type";
import { createInitialName } from "@/libs/utils";

interface UserDetailSheetTriggerProps {
  id: string;
  userData: TUserAdminDashboard[];
}
export const UserDetailSheetTrigger: React.FC<UserDetailSheetTriggerProps> = ({
  id,
  userData,
}): React.ReactElement => {
  const data = userData.find((item) => item.id === id);
  if (!data) {
    return <UserDetailSheetFallback />;
  }
  const initialName = createInitialName(data.name);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ActionButton className="shrink-0">
          <FileTextIcon size={16} />
        </ActionButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail Pengguna</SheetTitle>
          <SheetDescription className="sr-only">User Details.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col space-y-0.5 py-4 items-center">
            <Avatar className="size-14">
              <AvatarFallback>{initialName}</AvatarFallback>
              <AvatarImage
                src={data.imgUrl ? data.imgUrl : "/avatars/avatar-male.png"}
              />
            </Avatar>
            <h1 className="text-lg md:text-xl font-semibold">{data.name}</h1>
            <h2 className="text-sm md:text-base text-muted-foreground">
              {data.position}
            </h2>
          </div>
          <Separator />
          <h1 className="text-base md:text-lg font-semibold py-4">
            Data pribadi
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Nama Lengkap</strong>
              <p>{data.name}</p>
            </div>
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Nomor Telepon</strong>
              <p>{data.phoneNumber}</p>
            </div>
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Jabatan</strong>
              <p>{data.position || '-'}</p>
            </div>
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Perusahaan</strong>
              <p>{data.company || '-'}</p>
            </div>
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Kota</strong>
              <p>{data.city || '-'}</p>
            </div>
            <div className="flex items-center gap-8 text-sm justify-start py-2 border-b border-neutral-200">
              <strong className="w-[35%]">Tanggal Lahir</strong>
              <p>{data.birthDate}</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-2 my-4">
            <SheetClose asChild>
              <Button variant="ghost">Kembali</Button>
            </SheetClose>
            <UserDeleteTrigger id={data.id} isOnSheet />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const UserDetailSheetFallback: React.FC = (): React.ReactElement => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ActionButton className="shrink-0">
          <FileTextIcon size={16} />
        </ActionButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail Pengguna</SheetTitle>
          <SheetDescription>Data Pengguna tidak ditemukan.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
