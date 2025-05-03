/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};

// export default {
//   testEnvironment: 'node',
//   preset: 'ts-jest',
//   moduleNameMapper: {
//     '^@src/(.*)$': '<rootDir>/src/$1',
//   },
//   transform: {
//     '\\.[jt]sx?$': 'babel-jest',
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   extensionsToTreatAsEsm: ['.ts'],
// };