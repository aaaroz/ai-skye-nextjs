"use client";
import * as React from "react";
import { TToggleSidebarCollapseContextProvider } from "./type";
import { ToggleSidebarCollapseContext } from "./sidebar.collapse.context";

export const ToggleSidebarCollapseContextProvider = ({
  children,
}: TToggleSidebarCollapseContextProvider) => {
  const [isCollapsed, toggleIsCollapsed] = React.useState(false);

  return (
    <ToggleSidebarCollapseContext.Provider
      value={{ isCollapsed, toggleIsCollapsed }}
    >
      {children}
    </ToggleSidebarCollapseContext.Provider>
  );
};
