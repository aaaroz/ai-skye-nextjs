import * as React from "react";
import { SectionContainer } from "@/components/layout";
import { paragraphOpeningTerms, terms } from "@/libs/entities";

export const TermsSection = () => {
  return (
    <SectionContainer data-testid="terms-section">
      <p className="text-base sm:text-lg md:text-xl">{paragraphOpeningTerms}</p>
      {terms.map(({ title, description }, index) => (
        <div key={index}>
          <strong className="text-lg md:text-xl">{title}</strong>
          <p className="text-base sm:text-lg md:text-xl ">{description}</p>
        </div>
      ))}
    </SectionContainer>
  );
};
