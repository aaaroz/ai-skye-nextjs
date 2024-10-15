"use client";
import * as React from "react";
import { FeatureCard, FeatureCardSkeleton } from "./feature.card";
import { useFeatures } from "@/libs/hooks";
import { usePathname } from "next/navigation";

export const FeaturesInstagram: React.FC = (): React.ReactElement => {
  const pathname = usePathname();
  const { features } = useFeatures();
  const featuresInstagram =
    pathname === "/"
      ? features
          ?.filter(
            (feature) => feature.categoryname.toLowerCase() === "instagram"
          )
          .splice(0, 3)
      : features?.filter(
          (feature) => feature.categoryname.toLowerCase() === "instagram"
        );

  return (
    <>
      {featuresInstagram && featuresInstagram.length > 0 ? (
        featuresInstagram.map(({ featuresname, subdeskripsi }, index) => (
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
