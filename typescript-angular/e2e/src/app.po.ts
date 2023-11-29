import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getStoreBanner(): Promise<string> {
    return (element(by.id('storeBanner'))).getText() as Promise<string>;
  }
}
