"use client";
import * as React from "react";
import { TFeatureDashboardContextProvider } from "./type";
import { FeatureDashboardContext } from "./feature.dashboard.context";
import { dummyFeatures, TFeature } from "@/libs/entities";

export const FeatureDashboardContextProvider = ({
  children,
}: TFeatureDashboardContextProvider) => {
  const [features, setFeatures] = React.useState<TFeature[] | null>(
    dummyFeatures
  );

  return (
    <FeatureDashboardContext.Provider value={{ features, setFeatures }}>
      {children}
    </FeatureDashboardContext.Provider>
  );
};
