import * as React from "react";
import { SectionContainer } from "@/components/layout";
import { FirstStepExample } from "./first.step.example";
import { FirstStepInstruction } from "./first.step.instruction";
import { SecondStepInstruction } from "./second.step.instruction";
import { SecondStepExample } from "./second.step.example";

interface StepSectionProps {
  title: string;
}

export const StepSection: React.FC<StepSectionProps> = ({
  title,
}): React.ReactElement => {
  return (
    <SectionContainer data-testid='step-section' className="lg:space-y-10">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          2 Langkah Kilat Membuat {title}
        </h1>
        <p className="text-base md:text-lg font-medium text-muted-foreground">
          Hanya dua langkah mudah dan cepat, kamu bisa membuat {title} menarik
          dalam hitungan detik.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-x-2 gap-y-8">
        <FirstStepInstruction />
        <FirstStepExample />
        <SecondStepExample />
        <SecondStepInstruction />
      </div>
    </SectionContainer>
  );
};
