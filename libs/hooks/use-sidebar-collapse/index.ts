import * as React from "react";
import { ToggleSidebarCollapseContext } from "@/libs/context";

export const useToggleSidebarCollapse = () => {
  const context = React.useContext(ToggleSidebarCollapseContext);
  if (!context) {
    throw new Error(
      "useToggleSidebarCollapseContext should be used within <ToggleSidebarCollapseContextProvider>"
    );
  }
  return context;
};
