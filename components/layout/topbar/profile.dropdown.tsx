import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AccountDropdownGroup } from "./account.dropdown.group";
import { FeaturesDropdownGroup } from "./features.dropdown.group";
import { OtherDropdownGroup } from "./other.dropdown.group";
import { LogoutDialogTrigger } from "./logout.dialog.trigger";

export const ProfileDropdown: React.FC = (): React.ReactElement => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AccountDropdownGroup />
        <DropdownMenuLabel>Menu Fitur</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <FeaturesDropdownGroup />
        <DropdownMenuLabel>Lainnya</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <OtherDropdownGroup />
        <DropdownMenuSeparator />
        <LogoutDialogTrigger />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
