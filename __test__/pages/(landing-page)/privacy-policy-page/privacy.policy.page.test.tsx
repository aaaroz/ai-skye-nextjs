import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PrivacyPolicyPage from "@/app/(landing-page)/privacy-policy/page";
import { PrivacyPolicyPageModule } from "@/app/(landing-page)/privacy-policy/_modules";

describe("PrivacyPolicy", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<PrivacyPolicyPage />);

    expect(baseElement).toBeTruthy();
  });

  it("Should have Terms & Condition Page module", () => {
    render(<PrivacyPolicyPage />);

    const privacyPolicyPageModule = screen.getByTestId(
      "privacy-policy-page-module"
    );

    expect(privacyPolicyPageModule).toBeInTheDocument();
  });

  it("Should have Privacy Policy & Condition Section", () => {
    render(<PrivacyPolicyPageModule />);

    const privacyPolicySection = screen.getByTestId("privacy-policy-section");

    expect(privacyPolicySection).toBeInTheDocument();
  });
});
