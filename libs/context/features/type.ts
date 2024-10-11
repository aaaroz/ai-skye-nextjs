import * as React from "react";
import { Feature } from "@/libs/entities";

export type TFeatureContext = {
  features: Feature[] | null;
  setFeatures: React.Dispatch<React.SetStateAction<Feature[] | null>>;
  filteredFeatures: Feature[] | null;
  setFilteredFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
  shouldFetchData: boolean;
  toggleShouldFetchData: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TFeatureContextProvider = {
  children: React.ReactNode;
};
