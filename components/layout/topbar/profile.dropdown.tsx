import * as React from "react";
import {
  CpuIcon,
  FilesIcon,
  Keyboard,
  LayoutDashboardIcon,
  LogOut,
  MessageSquareTextIcon,
  Settings,
  User,
  WalletIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profil</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Pengaturan Akun</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel>Menu Fitur</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            <span>Dashboard Admin</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            <DropdownMenuShortcut>⌘⇧D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CpuIcon className="mr-2 h-4 w-4" />
            <span>AI Generator</span>
            <DropdownMenuShortcut>⌘⇧A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FilesIcon className="mr-2 h-4 w-4" />
            <span>Semua Dokumen</span>
            <DropdownMenuShortcut>⌘⇧F</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <WalletIcon className="mr-2 h-4 w-4" />
            <span>Pembayaran</span>
            <DropdownMenuShortcut>⌘⇧P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel>Lainnya</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Pintasan Keyboard</span>
            <DropdownMenuShortcut>⌘⇧?</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquareTextIcon className="mr-2 h-4 w-4" />
            <span>Dukungan</span>
            <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
