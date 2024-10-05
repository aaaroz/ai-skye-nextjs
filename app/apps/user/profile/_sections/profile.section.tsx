"use client";
import * as React from "react";
import Link from "next/link";
import { MoveLeftIcon, SettingsIcon, User2Icon } from "lucide-react";
import {
  DocumentCard,
  HeadingWithIcon,
  TokenCard,
} from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { dashboardUserRoute } from "@/libs/entities";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export const ProfileSection: React.FC = (): React.ReactElement => {
  const pathname = usePathname();
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow bg-neutral-50">
      <div className="flex justify-between items-center">
        {pathname.includes("settings") ? (
          <HeadingWithIcon
            icon={<SettingsIcon size={32} />}
            text="Pengaturan Akun"
          />
        ) : (
          <HeadingWithIcon icon={<User2Icon size={32} />} text="Profil Saya" />
        )}
        {pathname.includes("settings") ? (
          <Link href={dashboardUserRoute.concat("profile")}>
            <Button className="text-neutral-800 bg-sky-100 hover:bg-sky-100/50">
              <MoveLeftIcon size={18} className="mr-2" />
              Kembali ke akun saya
            </Button>
          </Link>
        ) : (
          <Link href={dashboardUserRoute.concat("profile/settings")}>
            <Button className="text-neutral-800 bg-sky-100 hover:bg-sky-100/50">
              <SettingsIcon size={18} className="mr-2" />
              Pengaturan Akun
            </Button>
          </Link>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center rounded-sm p-6 space-y-6 bg-sky-800">
        <div className="w-full md:w-1/2 flex gap-x-4 items-center text-neutral-50">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarFallback className="text-4xl text-foreground">
              MR
            </AvatarFallback>
            <AvatarImage src="/avatars/avatar-male.png" alt="avatar-user" />
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              John Doe
            </h1>
            <p className="text-base md:text-lg font-normal">Happy Person</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-2 md:justify-end">
          <DocumentCard />
          <TokenCard />
        </div>
      </div>
    </section>
  );
};
