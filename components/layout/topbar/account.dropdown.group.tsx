import * as React from "react";
import Link from "next/link";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Settings, User, UserCog } from "lucide-react";
import { dashboardAdminRoute, dashboardUserRoute } from "@/libs/entities";

const profileRoute = dashboardUserRoute.concat("profile");
const settingsRoute = dashboardUserRoute.concat("profile/settings");
const adminRoute = dashboardAdminRoute.concat("dashboard");

export const AccountDropdownGroup: React.FC = (): React.ReactElement => {
  return (
    <DropdownMenuGroup>
      <Link href={profileRoute} title="Profil saya">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
      </Link>
      <Link href={settingsRoute} title="Pengaturan akun">
        <DropdownMenuItem>
          <UserCog className="mr-2 h-4 w-4" />
          <span>Pengaturan Akun</span>
        </DropdownMenuItem>
      </Link>
      <Link href={adminRoute} title="Administrator">
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Administrator</span>
        </DropdownMenuItem>
      </Link>
    </DropdownMenuGroup>
  );
};
