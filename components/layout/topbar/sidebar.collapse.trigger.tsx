"use client";
import * as React from "react";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToggleSidebarCollapse } from "@/libs/hooks";

export const SidebarCollapseTrigger: React.FC = (): React.ReactElement => {
  const { isCollapsed, toggleIsCollapsed } = useToggleSidebarCollapse();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleIsCollapsed((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggleIsCollapsed]);

  return (
    <Button
      variant="ghost"
      size="icon"
      title="Toggle Sidebar"
      onClick={() => toggleIsCollapsed((prev) => !prev)}
    >
      {isCollapsed ? (
        <SidebarOpenIcon className="size-5" />
      ) : (
        <SidebarCloseIcon className="size-5" />
      )}
    </Button>
  );
};
