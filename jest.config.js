module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['./src/setupJest.js'],
  collectCoverage: true,
  moduleNameMapper: { '^@/assets/(.*)$': '<rootDir>/src/assets/logo.png' },
  transformIgnorePatterns: ['<rootDir>/src/components/*/types.ts']
};
