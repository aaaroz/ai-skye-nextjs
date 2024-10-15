import * as React from "react";
import { AdminDashboardContext } from "@/libs/context";

export const useAdminDashboard = () => {
  const context = React.useContext(AdminDashboardContext);
  if (!context) {
    throw new Error(
      "useAdminDashboardContext should be used within <AdminDashboardContextProvider>"
    );
  }
  return context;
};
