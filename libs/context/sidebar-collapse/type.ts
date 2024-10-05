import * as React from "react";

export type TToggleSidebarCollapseContext = {
  isCollapsed: boolean;
  toggleIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TToggleSidebarCollapseContextProvider = {
  children: React.ReactNode;
};
