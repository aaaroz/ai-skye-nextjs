import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "@jest/globals";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// Optional: cleans up `render` after each test
afterEach(() => {
  cleanup();
});
