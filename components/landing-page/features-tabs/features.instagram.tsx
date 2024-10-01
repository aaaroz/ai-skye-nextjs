import * as React from "react";
import { FeatureCard } from "./feature.card";
import { dummyFeatures } from "@/libs/entities";

const dummyFeaturesInstagram = dummyFeatures.filter(
  (feature) => feature.category === "instagram"
);
export const FeaturesInstagram = () => {
  return (
    <>
      {dummyFeaturesInstagram.map(({ title, headline }, index) => (
        <FeatureCard key={index} title={title} headline={headline} />
      ))}
    </>
  );
};
