/// <reference lib="dom" />
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import LandingPage from "../(landing-page)/page";

describe("LandingPage", () => {
  it("renders a heading", () => {
    const { baseElement } = render(<LandingPage />);

    expect(baseElement).toBeTruthy();
  });
});
