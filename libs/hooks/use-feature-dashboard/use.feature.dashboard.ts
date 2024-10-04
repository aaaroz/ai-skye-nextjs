import * as React from "react";
import { FeatureDashboardContext } from "@/libs/context";

export const useFeatureDashboard = () => {
  const context = React.useContext(FeatureDashboardContext);
  if (!context) {
    throw new Error(
      "useFeatureDashboardContext should be used within <FeatureDashboardContextProvider>"
    );
  }
  return context;
};
