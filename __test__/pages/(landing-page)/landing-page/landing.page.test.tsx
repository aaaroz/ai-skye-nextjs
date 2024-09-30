import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/(landing-page)/page";
import { LandingPageModule } from "@/app/(landing-page)/_modules";

describe("LandingPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<LandingPage />);

    expect(baseElement).toBeTruthy();
  });

  it("Should have Landing Page module", () => {
    render(<LandingPage />);

    const landingPageModule = screen.getByTestId("landing-page-module");

    expect(landingPageModule).toBeInTheDocument();
  });

  it("Should have Hero Section", () => {
    render(<LandingPageModule />);

    const heroSection = screen.getByTestId("hero-section");

    expect(heroSection).toBeInTheDocument();
  });

  it("Should have Features Section", () => {
    render(<LandingPageModule />);

    const featuresSection = screen.getByTestId("features-section");

    expect(featuresSection).toBeInTheDocument();
  });

  it("Should have Step Section", () => {
    render(<LandingPageModule />);

    const stepSection = screen.getByTestId("step-section");

    expect(stepSection).toBeInTheDocument();
  });

  it("Should have Pricing Section", () => {
    render(<LandingPageModule />);

    const pricingSection = screen.getByTestId("pricing-section");

    expect(pricingSection).toBeInTheDocument();
  });

  it("Should have FAQs Section", () => {
    render(<LandingPageModule />);

    const faqsSection = screen.getByTestId("faqs-section");

    expect(faqsSection).toBeInTheDocument();
  });
});
