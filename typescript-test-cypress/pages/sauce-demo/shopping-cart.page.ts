import { Header } from './header';

export type CartItems = {
  index: number;
  quantity: number;
  name: string;
  price: string;
  removeFromCart(): void;
};

export class ShoppingCartPage {
  private _header: Header;

  constructor() {
    this._header = new Header();
  }

  get header(): Header {
    return this._header;
  }

  private readonly continueShoppingButton = '#continue-shopping';
  private readonly itemsList = '.cart_item';
  private readonly itemsQuantity = '.cart_quantity';
  private readonly itemsName = '.inventory_item_name';
  private readonly itemsPrice = '.inventory_item_price';
  private readonly itemsRemoveFromCart = 'button[id*="remove"]';

  continueShopping(): void {
    cy.get(this.continueShoppingButton).click();
  }

  getCartItems(): Cypress.Chainable<CartItems[]> {
    return cy.get(this.itemsList).then(($items) => {
      const items: CartItems[] = [];
      $items.each((index, item) => {
        const $item = Cypress.$(item);
        items.push({
          index,
          quantity: parseInt($item.find(this.itemsQuantity).text().trim()),
          name: $item.find(this.itemsName).text().trim(),
          price: $item.find(this.itemsPrice).text().trim(),
          removeFromCart: () => {
            cy.get(this.itemsList).eq(index).find(this.itemsRemoveFromCart).click();
          },
        });
      });
      return items;
    });
  }
}
