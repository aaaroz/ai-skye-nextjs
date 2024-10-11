"use client";
import * as React from "react";
import { FeatureCard, FeatureCardSkeleton } from "./feature.card";
import { usePathname } from "next/navigation";
import { useFeatures } from "@/libs/hooks";

export const FeaturesEcommerce = () => {
  const pathname = usePathname();
  const { features } = useFeatures();
  const featuresEcommerce =
    pathname === "/"
      ? features
          ?.filter(
            (feature) => feature.categoryname.toLowerCase() === "ecommerce"
          )
          .splice(0, 3)
      : features?.filter(
          (feature) => feature.categoryname.toLowerCase() === "ecommerce"
        );

  return (
    <>
      {featuresEcommerce && featuresEcommerce.length > 0 ? (
        featuresEcommerce.map(({ featuresname, subdeskripsi }, index) => (
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
