import { defineConfig } from 'cypress';
import setupPlugin from './cypress/plugins/index';

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  videosFolder: 'cypress/artifacts/videos',
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/artifacts/screenshots',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/artifacts/reports',
      charts: true,
      reportPageTitle: 'My Test Suite',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/artifacts/reports/junit/results.xml',
    },
  },
  e2e: {
    setupNodeEvents(on) {
      return setupPlugin(on);
    },
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
});
