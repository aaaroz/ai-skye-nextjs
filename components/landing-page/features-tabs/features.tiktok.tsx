import * as React from "react";
import { FeatureCard } from "./feature.card";
import { dummyFeatures } from "@/libs/entities";

const dummyFeaturesTiktok = dummyFeatures.filter(
  (feature) => feature.category === "tiktok"
);

export const FeaturesTiktok = () => {
  return (
    <>
      {dummyFeaturesTiktok.map(({ title, headline }, index) => (
        <FeatureCard key={index} title={title} headline={headline} />
      ))}
    </>
  );
};
