/** @type {import('ts-jest').JestConfigWithTsJest} **/

import type { Config } from "jest";
import { defaults } from "jest-config";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "parse5/lib/parser/index.js":
      "<rootDir>/node_modules/hast-util-raw/node_modules/parse5/lib/parser/index.js",
    "next-auth/(.*)": "<rootDir>/node_modules/next-auth/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  preset: "ts-jest",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  testMatch: ["**/__test__/**/*.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  // Add more setup options before each test is run
};
const exportConfig = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: ["node_modules/(?!(mui-tel-input)/)"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/dist",
  ],
});

export default exportConfig;
