"use client";
import * as React from "react";
import { FeatureContext } from "@/libs/context";

export const useFeatures = () => {
  const context = React.useContext(FeatureContext);
  if (!context) {
    throw new Error(
      "useFeaturesContext should be used within <FeatureContextProvider>"
    );
  }
  return context;
};
