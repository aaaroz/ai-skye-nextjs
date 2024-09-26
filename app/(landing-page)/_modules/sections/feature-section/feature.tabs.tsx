import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturesInstagram } from "./features.instagram";
import { FeaturesTiktok } from "./features.tiktok";
import { FeaturesShopee } from "./features.shopee";

export const FeatureTabs: React.FC = (): React.ReactElement => {
  return (
    <Tabs
      defaultValue="instagram"
      className="flex flex-col justify-center gap-8 items-center w-full"
    >
      <TabsList className="w-fit bg-transparent gap-2">
        <TabsTrigger
          value="instagram"
          className="capitalize text-lg px-4 py-2 text-sky-800 border bg-white border-sky-800 data-[state=active]:bg-sky-800 data-[state=active]:text-white"
        >
          instagram
        </TabsTrigger>
        <TabsTrigger
          value="tiktok"
          className="capitalize text-lg px-4 py-2 text-sky-800 border bg-white border-sky-800 data-[state=active]:bg-sky-800 data-[state=active]:text-white"
        >
          tiktok
        </TabsTrigger>
        <TabsTrigger
          value="shopee"
          className="capitalize text-lg px-4 py-2 text-sky-800 border bg-white border-sky-800 data-[state=active]:bg-sky-800 data-[state=active]:text-white"
        >
          shopee
        </TabsTrigger>
      </TabsList>
      <TabsContent value="instagram">
        <FeaturesInstagram />
      </TabsContent>
      <TabsContent value="tiktok">
        <FeaturesTiktok />
      </TabsContent>
      <TabsContent value="shopee">
        <FeaturesShopee />
      </TabsContent>
    </Tabs>
  );
};
