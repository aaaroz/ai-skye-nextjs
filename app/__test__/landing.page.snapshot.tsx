import { render } from "@testing-library/react";
import { expect } from "@jest/globals";

import LandingPage from "../(landing-page)/page";

it("renders homepage unchanged", () => {
  const { container } = render(<LandingPage />);
  expect(container).toMatchSnapshot();
});
