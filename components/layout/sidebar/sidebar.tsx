"use client";
import * as React from "react";
import { SidebarMenuGroup } from "./sidebar.menu.group";
import {
  dashboardUserAccountItems,
  dashboardUserMenuItems,
} from "@/libs/entities";
import { useMediaQuery, useToggleSidebarCollapse } from "@/libs/hooks";
import { cn } from "@/libs/utils";
import { Separator } from "@/components/ui/separator";

export const Sidebar: React.FC = (): React.ReactElement => {
  const { isCollapsed, toggleIsCollapsed } = useToggleSidebarCollapse();
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const widthCheck = React.useCallback(() => {
    if (isMediumScreen) {
      toggleIsCollapsed(false);
    } else {
      toggleIsCollapsed(true);
    }
  }, [toggleIsCollapsed, isMediumScreen]);

  React.useEffect(() => {
    widthCheck();
  }, [widthCheck]);

  return (
    <aside
      className={cn(
        "w-[300px] fixed z-20 left-0 flex flex-col top-20 h-[89vh] px-5 py-8 md:space-y-5 transition-all duration-300 bg-background",
        {
          "w-[98px]": isCollapsed,
          "-left-52": isCollapsed && !isSmallScreen,
        }
      )}
    >
      <div className="space-y-4">
        <SidebarMenuGroup items={dashboardUserMenuItems} groupTitle="Menu" />
      </div>
      <Separator />
      <div className="space-y-4">
        <SidebarMenuGroup items={dashboardUserAccountItems} groupTitle="Akun" />
      </div>
    </aside>
  );
};
