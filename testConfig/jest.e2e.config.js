module.exports = {
  rootDir: "../",
  testMatch: ['<rootDir>/src/__tests__/**/?(*.)(spec|test).e2e.js?(x)'],
  globalSetup: './testConfig/setup.e2e.js',
  globalTeardown: './testConfig/teardown.e2e.js',
  testEnvironment: './testConfig/environment.e2e.js',
  preset: 'jest-puppeteer'
}
