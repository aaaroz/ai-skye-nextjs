import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeatureDetailPage from "@/app/(landing-page)/features/[slug]/page";
import { FeatureDetailPageModule } from "@/app/(landing-page)/features/[slug]/_modules";
import { Feature } from "@/libs/entities";

const dummyFeature: Feature = {
  id: "1",
  categoryname: "Content Creation",
  featuresname: "AI Text Generator",
  slug: "ai-text-generator",
  deskripsi: "Generate high-quality text with AI technology.",
  subdeskripsi:
    "This feature helps users create various content types such as articles, social media posts, and more.",
  data: [],
};

describe("FeatureDetailPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(
      <FeatureDetailPage params={{ slug: dummyFeature.slug }} />
    );

    expect(baseElement).toBeTruthy();
  });

  it("Should have Feature Detail Page module", () => {
    render(<FeatureDetailPage params={{ slug: dummyFeature.slug }} />);

    const featureDetailPageModule = screen.getByTestId(
      "feature-detail-page-module"
    );

    expect(featureDetailPageModule).toBeInTheDocument();
  });

  it("Should have Description Section", () => {
    render(<FeatureDetailPageModule featureData={dummyFeature as Feature} />);

    const descriptionSection = screen.getByTestId("description-section");

    expect(descriptionSection).toBeInTheDocument();
  });

  it("Should have Step Section", () => {
    render(<FeatureDetailPageModule featureData={dummyFeature as Feature} />);

    const stepSection = screen.getByTestId("step-section");

    expect(stepSection).toBeInTheDocument();
  });
});
