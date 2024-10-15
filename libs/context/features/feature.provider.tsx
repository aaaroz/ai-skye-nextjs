"use client";
import * as React from "react";
import { TFeatureContextProvider } from "./type";
import { Feature } from "@/libs/entities";
import { FeatureContext } from "./feature.context";
import { getAllFeatures } from "@/libs/actions";

export const FeatureContextProvider = ({
  children,
}: TFeatureContextProvider) => {
  const [features, setFeatures] = React.useState<Feature[] | null>(null);
  const [filteredFeatures, setFilteredFeatures] = React.useState<Feature[]>([]);
  const [shouldFetchData, toggleShouldFetchData] =
    React.useState<boolean>(false);

  const fetchFeatures = React.useCallback(async () => {
    const features = await getAllFeatures();
    setFeatures(features);
  }, []);

  React.useEffect(() => {
    if (shouldFetchData) {
      fetchFeatures();
      toggleShouldFetchData(false);
    }
    fetchFeatures();
  }, [fetchFeatures, shouldFetchData]);

  return (
    <FeatureContext.Provider
      value={{
        features,
        setFeatures,
        filteredFeatures,
        setFilteredFeatures,
        shouldFetchData,
        toggleShouldFetchData,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};
