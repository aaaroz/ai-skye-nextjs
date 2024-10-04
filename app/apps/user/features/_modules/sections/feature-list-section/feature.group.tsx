import * as React from "react";
import { FeatureCard } from "./feature.card";
import { TFeature } from "@/libs/entities";
import { cn } from "@/libs/utils";

interface FeatureGroupProps {
  title: string;
  description: string;
  features: TFeature[];
  className?: string;
}
export const FeatureGroup: React.FC<FeatureGroupProps> = ({
  title,
  description,
  features,
  className,
}): React.ReactElement => {
  return (
    <div className={cn("space-y-2 mt-6", className)}>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
        {features.length !== 0 ? (
          features.map(({ title, headline, category,id }, index) => (
            <FeatureCard
              key={index}
              id={id}
              title={title}
              headline={headline}
              category={category}
            />
          ))
        ) : (
          <div className="w-full flex h-[20vh] justify-start items-center text-muted-foreground">
            <h1 className="text-base font-semibold">
              Fitur AI Tidak Ditemukan Dalam Kategori Ini
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
