"use client";
import * as React from "react";

import { SidebarMenuGroup } from "./sidebar.menu.group";
import {
  dashboardUserAccountItems,
  dashboardUserMenuItems,
} from "@/libs/entities";
import { useToggleSidebarCollapse } from "@/libs/hooks";
import { cn } from "@/libs/utils";

export const Sidebar: React.FC = (): React.ReactElement => {
  const { isCollapsed } = useToggleSidebarCollapse();
  return (
    <aside
      className={cn(
        "w-[300px] min-h-screen px-5 py-8 space-y-5 transition-all duration-300",
        {
          "w-[98px]": isCollapsed,
        }
      )}
    >
      <div className="space-y-4">
        <SidebarMenuGroup items={dashboardUserMenuItems} groupTitle="Menu" />
      </div>
      <div className="space-y-4 pt-4 border-t border-neutral-200">
        <SidebarMenuGroup items={dashboardUserAccountItems} groupTitle="Akun" />
      </div>
    </aside>
  );
};
