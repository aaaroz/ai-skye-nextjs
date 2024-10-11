"use client";
import * as React from "react";
import { cn } from "@/libs/utils";
import { TFeatureCategory } from "@/libs/entities";

interface FeatureHeaderSectionProps {
  title: string;
  description: string;
  category: TFeatureCategory;
  headline: string;
}
export const FeatureHeaderSection: React.FC<FeatureHeaderSectionProps> = ({
  title,
  description,
  category,
  headline,
}): React.ReactElement => {
  const backgroundTitle = {
    "from-sky-600 via-sky-100 to-transparent": category === "tiktok",
    "from-rose-600 via-rose-100 to-transparent": category === "instagram",
    "from-orange-600 via-orange-100 to-transparent": category === "ecommerce",
  };
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow-md bg-neutral-50">
      <div
        className={cn("py-2 w-full rounded bg-gradient-to-l", backgroundTitle)}
      >
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      </div>
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        {description}
      </p>
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        {headline}
      </p>
    </section>
  );
};
