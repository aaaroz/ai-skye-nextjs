import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeatureDetailPage from "@/app/(landing-page)/features/[slug]/page";
import { FeatureDetailPageModule } from "@/app/(landing-page)/features/[slug]/_modules";
import { dummyFeatures } from "@/libs/entities";

const dummySlug = "konten-shopee-post";
const dummyFeature = dummyFeatures.find((item) => item.slug === dummySlug);
describe("FeatureDetailPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(
      <FeatureDetailPage params={{ slug: dummySlug }} />
    );

    expect(baseElement).toBeTruthy();
  });

  it("Should have Feature Detail Page module", () => {
    render(<FeatureDetailPage params={{ slug: dummySlug }} />);

    const featureDetailPageModule = screen.getByTestId(
      "feature-detail-page-module"
    );

    expect(featureDetailPageModule).toBeInTheDocument();
  });

  it("Should have Description Section", () => {
    render(<FeatureDetailPageModule data={dummyFeature} />);

    const descriptionSection = screen.getByTestId("description-section");

    expect(descriptionSection).toBeInTheDocument();
  });

  it("Should have Step Section", () => {
    render(<FeatureDetailPageModule data={dummyFeature} />);

    const stepSection = screen.getByTestId("step-section");

    expect(stepSection).toBeInTheDocument();
  });
});
