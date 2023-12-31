import * as dotenv from 'dotenv';
import { TimelineService } from 'wdio-timeline-reporter/timeline-service';

dotenv.config();
const browserOptions = [
  '--disable-gpu',
  '--disable-logging',
  '--disable-dev-shm-usage',
  '--no-sandbox',
  '--window-size=1440,900',
];
if (process.env.HEADLESS === 'true') {
  browserOptions.push('--headless');
}

export const config: WebdriverIO.Config = {
  specs: ['./tests/ui/**/*.test.ts'],
  suites: {
    sauceDemo: ['./tests/ui/sauce-demo/**/*.test.ts'],
  },
  maxInstances: 3,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'goog:chromeOptions': {
        args: browserOptions,
      },
    },
  ],
  logLevel: 'error',
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  services: ['chromedriver', [TimelineService, {}]],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './artifacts/report/junit',
        outputFileFormat: function () {
          return 'ui-test-results.xml';
        },
      },
    ],
    [
      'timeline',
      {
        outputDir: './artifacts/report',
        embedImages: true,
        images: {
          quality: 80,
          resize: false,
          reductionRatio: 2,
        },
        screenshotStrategy: 'on:error',
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
};
