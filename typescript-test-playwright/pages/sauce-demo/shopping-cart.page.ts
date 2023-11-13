import { Page } from '@playwright/test';
import { Header } from './header';

export type CartItems = {
  index: number;
  quantity: number;
  name: string;
  price: string;
  removeFromCart(): Promise<void>;
};

export class ShoppingCartPage {
  private page: Page;
  private _header: Header;

  constructor(page: Page) {
    this.page = page;
    this._header = new Header(this.page);
  }

  get header() {
    return this._header;
  }

  private readonly continueShoppingButton = '#continue-shopping';
  private readonly itemsList = '.cart_item';
  private readonly itemsQuantity = '.cart_quantity';
  private readonly itemsName = '.inventory_item_name';
  private readonly itemsPrice = '.inventory_item_price';
  private readonly itemsRemoveFromCart = 'button[id*="remove"]';

  async continueShopping() {
    await this.page.locator(this.continueShoppingButton).click();
  }

  async getCartItems(): Promise<CartItems[]> {
    const items: CartItems[] = [];
    const itemEntries = await this.page.locator(this.itemsList).all();
    for (const [index, item] of itemEntries.entries()) {
      items.push({
        index,
        quantity: parseInt(
          await item
            .locator(this.itemsQuantity)
            .textContent()
            .then((text) => text?.trim() ?? ''),
        ),
        name: await item
          .locator(this.itemsName)
          .textContent()
          .then((text) => text?.trim() ?? ''),
        price: await item
          .locator(this.itemsPrice)
          .textContent()
          .then((text) => text?.trim() ?? ''),
        removeFromCart: async () => {
          await item.locator(this.itemsRemoveFromCart).click();
        },
      });
    }
    return items;
  }
}
