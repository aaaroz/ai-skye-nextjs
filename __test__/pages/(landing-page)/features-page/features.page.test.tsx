import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeaturesPage from "@/app/(landing-page)/features/page";
import { FeaturesPageModule } from "@/app/(landing-page)/features/_modules";

describe("FeaturesPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<FeaturesPage />);

    expect(baseElement).toBeTruthy();
  });

  it("Should have Features Page module", () => {
    render(<FeaturesPage />);

    const featuresPageModule = screen.getByTestId("features-page-module");

    expect(featuresPageModule).toBeInTheDocument();
  });

  it("Should have features Section", () => {
    render(<FeaturesPageModule />);

    const featuresSection = screen.getByTestId("features-section");

    expect(featuresSection).toBeInTheDocument();
  });
});
