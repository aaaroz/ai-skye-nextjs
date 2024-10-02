"use client";
import * as React from "react";
import { SidebarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToggleSidebarCollapse } from "@/libs/hooks";

export const SidebarCollapseTrigger: React.FC = (): React.ReactElement => {
  const { toggleIsCollapsed } = useToggleSidebarCollapse();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => toggleIsCollapsed((prev) => !prev)}
    >
      <SidebarIcon className="size-5" />
    </Button>
  );
};
