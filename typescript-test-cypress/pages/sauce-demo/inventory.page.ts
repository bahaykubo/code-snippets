import { Header } from './header';

export type InventoryItem = {
  name: string;
  price: string;
  addToCart(): void;
};

export class InventoryPage {
  private _header: Header;

  constructor() {
    this._header = new Header();
  }

  get header(): Header {
    return this._header;
  }

  private readonly itemsList = '.inventory_item';
  private readonly itemsName = '.inventory_item_name';
  private readonly itemsPrice = '.inventory_item_price';
  private readonly itemsAddToCart = 'button[id*="add-to-cart"]';

  getAllItems(): Cypress.Chainable<InventoryItem[]> {
    return cy.get(this.itemsList).then(($items) => {
      const items: InventoryItem[] = [];
      $items.each((index, item) => {
        const $item = Cypress.$(item);
        items.push({
          name: $item.find(this.itemsName).text().trim(),
          price: $item.find(this.itemsPrice).text().trim(),
          addToCart: () => {
            cy.get(this.itemsList).eq(index).find(this.itemsAddToCart).click();
          },
        });
      });
      return items;
    });
  }
}
