import { Button } from "@/components/ui/button";
import * as React from "react";
import { FeatureTabs } from "./feature.tabs";

export const FeatureSection: React.FC = (): React.ReactElement => {
  return (
    <section className="relative w-full min-h-[80dvh] py-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 left-[65rem] top-80 -z-10 size-72 bg-gradient-to-b from-sky-800 to-transparent rounded-full blur-3xl transform scale-110" />
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-3">
          <h1 className="col-span-2 pr-10 text-5xl font-bold">
            Fitur-fitur canggih yang dapat membantu meningkatkan bisnis anda
          </h1>
          <p className="text-base text-muted-foreground">
            KontenKilat memiliki fitur utama sebagai media atau platform yang
            membantu anda untuk membuat sebuah prompt agar dapat menghasilkan
            respon yang baik dan bermanfaat dari AI
          </p>
        </div>
        <FeatureTabs />
        <div className="w-full flex justify-center">
          <Button>Lihat Semua Fitur AI</Button>
        </div>
      </div>
    </section>
  );
};
