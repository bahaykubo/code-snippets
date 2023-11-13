import { loadEnvironmentVariablesFromFile, testConfig } from '@config/config';
import type { PlaywrightTestConfig, ReporterDescription } from '@playwright/test';

loadEnvironmentVariablesFromFile();
const reporter = (): ReporterDescription[] => {
  return [['html', { open: 'never', outputFolder: './artifacts/html' }], ['line']];
};

const config: PlaywrightTestConfig = {
  testDir: './tests',
  projects: [
    {
      name: 'ui',
      testMatch: '/ui/**',
    },
    {
      name: 'api',
      testMatch: '/api/**',
    },
  ],
  timeout: testConfig.testTimeout,
  expect: {
    timeout: testConfig.actionTimeout,
  },
  workers: testConfig.testRunners,
  reporter: reporter(),
  use: {
    actionTimeout: testConfig.actionTimeout,
    headless: testConfig.headless,
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    video: { mode: 'retain-on-failure' },
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: testConfig.slowMo,
    },
    viewport: testConfig.viewport,
  },
  outputDir: './artifacts/output',
};

export default config;
