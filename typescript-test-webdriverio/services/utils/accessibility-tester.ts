// eslint-disable-next-line @typescript-eslint/naming-convention
import AxeBuilder from '@axe-core/webdriverio';
import { createHtmlReport } from 'axe-html-reporter';

export class AccessibilityTester {
  private tester: AxeBuilder;
  private appName: string;
  private reportOutputDir: string;

  constructor(options: { browser: WebdriverIO.Browser; appName: string; reportOutputDir?: string }) {
    this.tester = new AxeBuilder({ client: options.browser });
    this.appName = options.appName;
    this.reportOutputDir = options.reportOutputDir ?? 'artifacts/report/';
  }

  /**
   * Run accessibility tests on the current page.
   * Provide a page name to append to the html report test result filename.
   */
  async analyzePage(pageName: string): Promise<void> {
    const testResult = await this.tester.analyze();
    createHtmlReport({
      results: testResult,
      options: {
        projectKey: this.appName,
        doNotCreateReportFile: false,
        reportFileName: `accessibility-test-result-${pageName}.html`,
        outputDir: this.reportOutputDir,
      },
    });
  }
}
