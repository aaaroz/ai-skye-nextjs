import * as React from "react";
import { SectionContainer } from "@/components/layout";
import { paragraphOpeningPrivacy, privacyPolicy } from "@/libs/entities";

export const PrivacySection: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer>
      <p className="text-base sm:text-lg md:text-xl">
        {paragraphOpeningPrivacy}
      </p>
      {privacyPolicy.map(({ title, description }, index) => (
        <div key={index}>
          <strong className="text-lg md:text-xl">{title}</strong>
          <p className="text-base sm:text-lg md:text-xl whitespace-pre-line">
            {description}
          </p>
        </div>
      ))}
    </SectionContainer>
  );
};
