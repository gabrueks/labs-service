process.env.ENV = 'TEST'

module.exports = {
    bail: 1,
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'tests/coverage',
    coverageReporters: ['text', 'lcov'],
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js', '**/tests/**.test.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', 'helpers.js'],
    setupFiles: ['./tests/unit/setupMock.js'],
    moduleFileExtensions: ['js', 'json', 'node', 'mjs'],
    transform: {
        '^.+.m?js$': 'babel-jest',
    },
}
