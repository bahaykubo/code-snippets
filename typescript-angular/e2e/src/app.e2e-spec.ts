import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display bike store banner', () => {
    page.navigateTo();
    expect(page.getStoreBanner()).toEqual('Bike Store');
  });

});
