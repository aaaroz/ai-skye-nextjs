"use client";
import * as React from "react";
import { FeatureCard, FeatureCardSkeleton } from "./feature.card";
import { useFeatures } from "@/libs/hooks";

export const FeaturesAll = () => {
  const { features } = useFeatures();

  return (
    <>
      {features && features.length > 0 ? (
        features.map(({ featuresname, subdeskripsi }, index) => (
          <FeatureCard
            key={index}
            title={featuresname}
            headline={subdeskripsi}
          />
        ))
      ) : (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <FeatureCardSkeleton key={index} />
          ))}
        </>
      )}
    </>
  );
};
