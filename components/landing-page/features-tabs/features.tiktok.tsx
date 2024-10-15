"use client";
import * as React from "react";
import { FeatureCard, FeatureCardSkeleton } from "./feature.card";
import { usePathname } from "next/navigation";
import { useFeatures } from "@/libs/hooks";

export const FeaturesTiktok = () => {
  const pathname = usePathname();
  const { features } = useFeatures();
  const featuresTiktok =
    pathname === "/"
      ? features
          ?.filter((feature) => feature.categoryname.toLowerCase() === "tiktok")
          .splice(0, 3)
      : features?.filter((feature) => feature.categoryname.toLowerCase() === "tiktok");
  return (
    <>
      {featuresTiktok && featuresTiktok.length > 0 ? (
        featuresTiktok.map(({ featuresname, subdeskripsi }, index) => (
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
