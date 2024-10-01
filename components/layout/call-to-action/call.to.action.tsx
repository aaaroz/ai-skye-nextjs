import * as React from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "../section-container";

export const CallToAction: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer className="lg:py-20">
      <div className="p-6 md:p-16 min-h-[300px] relative overflow-hidden rounded-md flex flex-col md:grid grid-cols-3 bg-sky-800">
        <div className="absolute inset-0 left-0 md:left-[45rem] top-10 z-0 size-96 bg-gradient-to-b from-sky-400/75 to-transparent rounded-full blur-3xl transform scale-110" />
        <div className="col-span-2 w-full space-y-5 md:space-y-8 text-background z-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Raih kunci kesuksesan masadepan bisnis kamu dengan AI, gunakan
            KontenKilat sekarang juga!
          </h1>
          <p className="text-sm">
            KontenKilat mempermudah kamu untuk membuat konten, dengan bantuan AI
            ciptakan ide-ide konten menarik yang out of the box!
          </p>
        </div>
        <div className="w-full mt-5 md:mt-0 h-full items-center flex justify-start md:justify-center z-10">
          <Button className="bg-neutral-800 hover:bg-neutral-700">
            Coba Gratis Sekarang
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
