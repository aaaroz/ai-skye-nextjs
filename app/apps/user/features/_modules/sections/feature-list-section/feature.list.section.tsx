"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Feature } from "@/libs/entities";
import { FeatureGroup } from "./feature.group";
import { useFeatures } from "@/libs/hooks";
import { cn } from "@/libs/utils";

export const FeatureListSection: React.FC = (): React.ReactElement => {
  const { filteredFeatures } = useFeatures();
  const featuresTiktok = filteredFeatures?.filter(
    (feature) => feature.categoryname.toLowerCase() === "tiktok"
  );
  const featuresInstagram = filteredFeatures?.filter(
    (feature) => feature.categoryname.toLowerCase() === "instagram"
  );
  const featuresEcommerce = filteredFeatures?.filter(
    (feature) => feature.categoryname.toLowerCase() === "ecommerce"
  );
  const searchParams = useSearchParams();
  const getVisibleCategory = searchParams?.get("category");
  return (
    <section className="w-full pt-4">
      <FeatureGroup
        title="TikTok & TikTok Shop"
        description="Dapatkan ide menarik untuk membuat konten tiktok dan tiktok shop anda dengan mudah menggunakan AI"
        features={featuresTiktok as Feature[]}
        className={cn({
          hidden: getVisibleCategory !== "tiktok",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
      <FeatureGroup
        title="Instagram"
        description="Dapatkan ide menarik untuk membuat konten instagram anda dengan mudah menggunakan AI"
        features={featuresInstagram as Feature[]}
        className={cn({
          hidden: getVisibleCategory !== "instagram",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
      <FeatureGroup
        title="E-Commerce"
        description="Dapatkan ide menarik untuk membuat konten e-commerce anda dengan mudah menggunakan AI"
        features={featuresEcommerce as Feature[]}
        className={cn({
          hidden: getVisibleCategory !== "ecommerce",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
    </section>
  );
};
