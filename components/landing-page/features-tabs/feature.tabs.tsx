import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturesInstagram } from "./features.instagram";
import { FeaturesTiktok } from "./features.tiktok";
import { FeaturesEcommerce } from "./features.ecommerce";
import { TFeatureCategory } from "@/libs/entities/types";
import { FeaturesAll } from "./features.all";

interface FeatureTabsProps {
  showAllFeatures?: boolean;
  defaultValue?: TFeatureCategory;
}

const tabsTriggerStyle =
  "capitalize text-sm sm:text-base md:text-lg px-2 sm:px-4 py-0.5 sm:py-2 text-sky-800 border bg-white border-sky-800 data-[state=active]:bg-sky-800 data-[state=active]:text-white";

export const FeatureTabs: React.FC<FeatureTabsProps> = ({
  showAllFeatures = false,
  defaultValue,
}): React.ReactElement => {
  return (
    <Tabs
      defaultValue={showAllFeatures ? defaultValue : "instagram"}
      className="flex flex-col justify-center gap-8 items-center w-full"
    >
      <TabsList className="w-fit flex flex-wrap bg-transparent gap-2">
        {showAllFeatures && (
          <TabsTrigger value="all" className={tabsTriggerStyle}>
            Semua kategori
          </TabsTrigger>
        )}
        <TabsTrigger value="instagram" className={tabsTriggerStyle}>
          instagram
        </TabsTrigger>
        <TabsTrigger value="tiktok" className={tabsTriggerStyle}>
          tiktok
        </TabsTrigger>
        <TabsTrigger value="ecommerce" className={tabsTriggerStyle}>
          e-commerce
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <FeaturesAll />
        </div>
      </TabsContent>
      <TabsContent value="instagram">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <FeaturesInstagram />
        </div>
      </TabsContent>
      <TabsContent value="tiktok">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <FeaturesTiktok />
        </div>
      </TabsContent>
      <TabsContent value="ecommerce">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <FeaturesEcommerce />
        </div>
      </TabsContent>
    </Tabs>
  );
};
