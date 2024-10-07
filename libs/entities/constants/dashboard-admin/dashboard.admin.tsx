import {
  CpuIcon,
  LayoutDashboardIcon,
  Users2Icon,
  WalletIcon,
} from "lucide-react";
import { TSidebarMenuItem } from "@/components/layout/sidebar/type";

const iconSize = 18;
export const dashboardAdminRoute = "/apps/admin/";
export const dashboardAdminMenuItems: TSidebarMenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboardIcon size={iconSize} />,
    href: dashboardAdminRoute.concat("dashboard"),
  },
  {
    title: "AI Generator",
    icon: <CpuIcon size={iconSize} />,
    href: dashboardAdminRoute.concat("features"),
  },
  {
    title: "Pengguna",
    icon: <Users2Icon size={iconSize} />,
    href: dashboardAdminRoute.concat("users"),
  },
  {
    title: "Transaksi",
    icon: <WalletIcon size={iconSize} />,
    href: dashboardAdminRoute.concat("transaction"),
  },
];
