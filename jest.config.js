module.exports = {
  testMatch: ['**/tests/**/*.test.js'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/setup.js'],
  testTimeout: 10000,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/migrations/'
  ]
};