export default {
  globals: {
    extensionsToTreatAsEsm: [".ts", ".js"],
    "ts-jest": {
      useESM: true,
    },
  },
  preset: "ts-jest/presets/js-with-ts-esm",
  transformIgnorePatterns: [],
  testPathIgnorePatterns: ["/node_modules/", "dist"],
};
