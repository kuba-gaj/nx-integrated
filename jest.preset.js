const nxPreset = require('@nrwl/jest/preset').default;

// module.exports = { ...nxPreset };
module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/dist/"],
  preset: "ts-jest",
  testEnvironment: "node",
};

