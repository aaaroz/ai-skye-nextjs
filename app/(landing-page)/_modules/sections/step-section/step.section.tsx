import * as React from "react";
import { FirstStepInstruction } from "./first.step.instruction";
import { FirstStepExample } from "./first.step.example";
import { SecondStepExample } from "./second.step.example";
import { SecondStepInstruction } from "./second.step.instruction";
import { ThirdStepInstruction } from "./third.step.instruction";
import { ThirdStepExample } from "./third.step.example";
import { SectionContainer } from "@/components/layout";

export const StepSection: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer data-testid='step-section' className="container lg:space-y-10 py-20">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Langkah Kilat Membuat Konten
        </h1>
        <p className="text-base md:text-lg font-medium text-muted-foreground">
          Hanya tiga langkah mudah, kamu bisa membuat konten menarik dalam
          hitungan detik
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-x-2 gap-y-8">
        <FirstStepInstruction />
        <FirstStepExample />
        <SecondStepExample />
        <SecondStepInstruction />
        <ThirdStepInstruction />
        <ThirdStepExample />
      </div>
    </SectionContainer>
  );
};
