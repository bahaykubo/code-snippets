import { Header } from './header';
import { domClick } from './dom-click';

export type CartItems = {
  index: number;
  quantity: number;
  name: string;
  price: string;
  removeFromCart(): Promise<void>;
};

export class ShoppingCartPage {
  private _header: Header;

  constructor() {
    this._header = new Header();
  }

  get header() {
    return this._header;
  }

  private readonly continueShoppingSelector = '#continue-shopping';
  private readonly cartListSelector = '.cart_list';

  private get itemsList() {
    return $$('.cart_item');
  }
  private get itemsQuantity() {
    return $$('.cart_item .cart_quantity');
  }
  private get itemsName() {
    return $$('.cart_item .inventory_item_name');
  }
  private get itemsPrice() {
    return $$('.cart_item .inventory_item_price');
  }
  private get itemsRemoveFromCart() {
    return $$('.cart_item button[id*="remove"]');
  }

  async continueShopping() {
    await domClick(this.continueShoppingSelector);
  }

  async getCartItems(): Promise<CartItems[]> {
    await $(this.cartListSelector).waitForExist();
    const items: CartItems[] = [];
    const itemEntries = await (await this.itemsList).entries();
    for (const item of itemEntries) {
      const index = item[0];
      items.push({
        index,
        quantity: parseInt(await (await this.itemsQuantity[index].getText()).trim()),
        name: await (await this.itemsName[index].getText()).trim(),
        price: await (await this.itemsPrice[index].getText()).trim(),
        removeFromCart: async () => {
          const id = await this.itemsRemoveFromCart[index].getAttribute('id');
          await domClick(`#${id}`);
        },
      });
    }
    return items;
  }
}
