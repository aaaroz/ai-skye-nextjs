import {
  CpuIcon,
  FilesIcon,
  LayoutDashboardIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import { TSidebarMenuItem } from "@/components/layout/sidebar/type";

const iconSize = 18;
export const dashboardUserRoute = "/apps/user/";
export const dashboardUserMenuItems: TSidebarMenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboardIcon size={iconSize} />,
    href: dashboardUserRoute.concat("dashboard"),
  },
  {
    title: "AI Generator",
    icon: <CpuIcon size={iconSize} />,
    href: dashboardUserRoute.concat("features"),
  },
  {
    title: "Dokumen saya",
    icon: <FilesIcon size={iconSize} />,
    href: dashboardUserRoute.concat("documents"),
  },
  {
    title: "Pembayaran",
    icon: <WalletIcon size={iconSize} />,
    href: dashboardUserRoute.concat("payment"),
  },
];

export const dashboardUserAccountItems: TSidebarMenuItem[] = [
  {
    title: "Akun saya",
    icon: <UserIcon size={iconSize} />,
    href: dashboardUserRoute.concat("profile"),
  },
];
