import { testConfig } from '../../config/config';
import { chromium } from 'playwright';
import addContext from 'mochawesome/addContext';

export const mochaHooks = {
  async beforeAll(this: any) {
    this.browser = await chromium.launch({
      slowMo: testConfig.slowMo,
      headless: testConfig.headless,
      chromiumSandbox: false,
      args: ['--disable-gpu', '--disable-logging', '--disable-dev-shm-usage', '--no-sandbox'],
    });
    this.context = await this.browser.newContext({
      ignoreHTTPSErrors: true,
      viewport: testConfig.viewport,
    });
    this.page = await this.context.newPage();
  },
  async afterAll(this: any) {
    await this.browser.close();
  },
  async afterEach(this: any) {
    if (this.currentTest.state === 'failed') {
      const title = this.currentTest.title.replace(/\s/g, '-');
      const screenshotFileName = `${title}_failed.png`;
      await this.page.screenshot({
        path: `artifacts/gui/mochawesome/assets/${screenshotFileName}`,
        fullPage: true,
      });
      addContext(this, `assets/${screenshotFileName}`);
    }
  },
};
