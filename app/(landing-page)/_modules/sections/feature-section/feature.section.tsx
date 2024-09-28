import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureTabs } from "@/components/landing-page";
import { SectionContainer } from "@/components/layout";

export const FeatureSection: React.FC = (): React.ReactElement => {
  return (
    <div className="2xl:container relative w-full min-h-[80dvh] py-9 md:py-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 left-[20rem] md:left-[65rem] top-28 md:top-80 -z-10 size-40 md:size-72 bg-gradient-to-b from-sky-800 to-transparent rounded-full blur-3xl transform scale-110" />
      <SectionContainer className="container flex flex-col gap-14">
        <div className="md:grid grid-cols-3 space-y-8">
          <h1 className="col-span-2 pr-10 text-3xl md:text-5xl font-bold">
            Fitur-fitur canggih yang dapat membantu meningkatkan bisnis anda
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            KontenKilat memiliki fitur utama sebagai media atau platform yang
            membantu anda untuk membuat sebuah prompt agar dapat menghasilkan
            respon yang baik dan bermanfaat dari AI
          </p>
        </div>
        <FeatureTabs />
        <div className="w-full flex justify-center">
          <Link href="/features">
            <Button>Lihat Semua Fitur AI</Button>
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
};
