import { Page } from '@playwright/test';

export class Header {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private readonly shoppingcartButton = '.shopping_cart_link';
  private readonly menuButton = '#react-burger-menu-btn';
  private readonly logoutButton = '#logout_sidebar_link';

  async openShoppingCart(): Promise<void> {
    await this.page.locator(this.shoppingcartButton).click();
  }

  async logout(): Promise<void> {
    await this.openMenu();
    await this.page.locator(this.logoutButton).click();
  }

  async openMenu(): Promise<void> {
    await this.page.locator(this.menuButton).click();
  }
}
