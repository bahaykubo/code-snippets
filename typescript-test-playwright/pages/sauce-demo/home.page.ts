import { siteUrl } from '@config/config';
import { Page } from '@playwright/test';
import { Credentials } from '@type/credentials';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';

  async open(): Promise<void> {
    await this.page.goto(siteUrl.sauceDemo);
  }

  async login(account: Credentials): Promise<void> {
    await this.page.locator(this.usernameInput).fill(account.username);
    await this.page.locator(this.passwordInput).fill(account.password);
    await this.page.locator(this.loginButton).click();
  }
}
