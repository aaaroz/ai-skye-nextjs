import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import LandingPage from "@/app/(landing-page)/page";

describe("LandingPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<LandingPage />);

    expect(baseElement).toBeTruthy();
  });
});
