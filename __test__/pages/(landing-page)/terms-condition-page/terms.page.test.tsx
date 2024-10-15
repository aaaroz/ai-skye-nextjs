import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TermsConditionPage from "@/app/(landing-page)/terms-condition/page";
import { TermsConditionPageModule } from "@/app/(landing-page)/terms-condition/_modules";

describe("Terms & Condition", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<TermsConditionPage />);

    expect(baseElement).toBeTruthy();
  });

  it("Should have Terms & Condition Page module", () => {
    render(<TermsConditionPage />);

    const termsPageModule = screen.getByTestId("terms-page-module");

    expect(termsPageModule).toBeInTheDocument();
  });

  it("Should have Terms & Condition Section", () => {
    render(<TermsConditionPageModule />);

    const termsSection = screen.getByTestId("terms-section");

    expect(termsSection).toBeInTheDocument();
  });
});
