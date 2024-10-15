import * as React from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout";

interface DescriptionSectionProps {
  description: string;
  headline: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
  headline,
}): React.ReactElement => {
  return (
    <SectionContainer data-testid='description-section'>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{headline}</h3>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        {description}
      </p>
      <Button>Coba Gratis Sekarang</Button>
    </SectionContainer>
  );
};
