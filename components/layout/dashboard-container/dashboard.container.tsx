"use client";
import { useToggleSidebarCollapse } from "@/libs/hooks";
import { cn } from "@/libs/utils";
import * as React from "react";

export const DashboardContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  const { isCollapsed } = useToggleSidebarCollapse();
  return (
    <div
      className={cn(
        "w-full min-h-[88vh] px-4 sm:pr-8 transition-all duration-200 bg-neutral-200",
        {
          "sm:pl-[130px]": isCollapsed,
          "sm:pl-[130px] md:pl-[332px]": !isCollapsed,
        }
      )}
    >
      {children}
    </div>
  );
};
