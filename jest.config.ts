import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMocks.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
