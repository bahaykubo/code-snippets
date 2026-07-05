import { domClick } from './dom-click';

export class Header {
  private readonly shoppingCartSelector = '.shopping_cart_link';
  private readonly menuButtonSelector = '#react-burger-menu-btn';
  private readonly logoutButtonSelector = '#logout_sidebar_link';
  private get logoutButton() {
    return $(this.logoutButtonSelector);
  }

  async openShoppingCart() {
    await domClick(this.shoppingCartSelector);
    await browser.waitUntil(async () => (await browser.getUrl()).includes('cart.html'));
  }

  async logout() {
    await this.openMenu();
    await this.logoutButton.waitForClickable();
    await domClick(this.logoutButtonSelector);
  }

  async openMenu() {
    await domClick(this.menuButtonSelector);
  }
}
