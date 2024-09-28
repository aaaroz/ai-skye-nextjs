import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import FeaturesPage from "@/app/(landing-page)/features/page";

describe("FeaturesPage", () => {
  it("Should render successfully!", () => {
    const { baseElement } = render(<FeaturesPage />);

    expect(baseElement).toBeTruthy();
  });
});
