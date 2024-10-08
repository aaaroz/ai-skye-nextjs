import * as React from "react";
import Link from "next/link";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  CpuIcon,
  FilesIcon,
  LayoutDashboardIcon,
  WalletIcon,
} from "lucide-react";
import { dashboardUserRoute } from "@/libs/entities";

const dashboardRoute = dashboardUserRoute.concat("dashboard");
const featuresRoute = dashboardUserRoute.concat("features");
const documentRoute = dashboardUserRoute.concat("documents");
const paymentRoute = dashboardUserRoute.concat("payment");

export const FeaturesDropdownGroup: React.FC = (): React.ReactElement => {
  return (
    <DropdownMenuGroup>
      <Link href={dashboardRoute} title="Dashboard">
        <DropdownMenuItem>
          <LayoutDashboardIcon className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>
      </Link>
      <Link href={featuresRoute} title="AI Generator">
        <DropdownMenuItem>
          <CpuIcon className="mr-2 h-4 w-4" />
          <span>AI Generator</span>
          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
        </DropdownMenuItem>
      </Link>
      <Link href={documentRoute} title="Semua Dokumen saya">
        <DropdownMenuItem>
          <FilesIcon className="mr-2 h-4 w-4" />
          <span>Dokumen saya</span>
        </DropdownMenuItem>
      </Link>
      <Link href={paymentRoute} title="Pembayaran saya">
        <DropdownMenuItem>
          <WalletIcon className="mr-2 h-4 w-4" />
          <span>Pembayaran</span>
        </DropdownMenuItem>
      </Link>
    </DropdownMenuGroup>
  );
};
