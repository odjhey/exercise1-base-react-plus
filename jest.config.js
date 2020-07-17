module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  roots: ["<rootDir>/src/"],
  testURL: "http://localhost",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
}
