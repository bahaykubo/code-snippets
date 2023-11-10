import type { Config } from '@jest/types';

export default (): Config.InitialOptions => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    testTimeout: 30000,
    verbose: true,
    reporters: ['default'],
    moduleNameMapper: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '^@config/(.*)$': '<rootDir>/config/$1',
      /* eslint-disable @typescript-eslint/naming-convention */
      '^@constant/(.*)$': '<rootDir>/constants/$1',
      /* eslint-disable @typescript-eslint/naming-convention */
      '^@service/(.*)$': '<rootDir>/services/$1',
    },
  };
};
