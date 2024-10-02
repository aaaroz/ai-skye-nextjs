"use client";
import * as React from "react";
import { TSidebarMenuItem } from "./type";
import { SidebarMenuItem } from "./sidebar.menu.item";
import { useToggleSidebarCollapse } from "@/libs/hooks";
import { cn } from "@/libs/utils";

interface SidebarMenuGroupProps {
  groupTitle: string;
  items: TSidebarMenuItem[];
}
export const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({
  groupTitle,
  items,
}): React.ReactElement => {
  const { isCollapsed } = useToggleSidebarCollapse();
  return (
    <>
      <h1
        className={cn(
          "text-xl font-semibold transition-all duration-200 scale-100",
          {
            "scale-0": isCollapsed,
          }
        )}
      >
        {groupTitle}
      </h1>
      <ul className="flex flex-col gap-2">
        {items.map(({ title, href, icon }, index) => (
          <SidebarMenuItem key={index} title={title} href={href} icon={icon} />
        ))}
      </ul>
    </>
  );
};
