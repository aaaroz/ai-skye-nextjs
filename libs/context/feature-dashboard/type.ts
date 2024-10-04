import * as React from "react";
import { TFeature } from "@/libs/entities";

export type TFeatureDashboardContext = {
  features: TFeature[] | null;
  setFeatures: React.Dispatch<React.SetStateAction<TFeature[]|null>>;
};

export type TFeatureDashboardContextProvider = {
  children: React.ReactNode;
};
