"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { TSidebarMenuItem } from "./type";
import { useToggleSidebarCollapse } from "@/libs/hooks";
import { cn } from "@/libs/utils";

export const SidebarMenuItem: React.FC<TSidebarMenuItem> = ({
  title,
  icon,
  href,
}): React.ReactElement => {
  const { isCollapsed } = useToggleSidebarCollapse();
  const pathname = usePathname();
  const isActive =
    href === pathname || pathname?.includes(href) ? "default" : "ghost";
  return (
    <li>
      <Link href={href} title={title}>
        <Button
          variant={isActive}
          className={cn(
            "flex w-full gap-3 px-5 justify-start items-center transition-all duration-300",
            {
              "px-0 justify-center": isCollapsed,
            }
          )}
        >
          {icon}
          <span
            className={cn("text-sm opacity-100 transition-all duration-200", {
              "hidden opacity-0": isCollapsed,
            })}
          >
            {title}
          </span>
        </Button>
      </Link>
    </li>
  );
};
