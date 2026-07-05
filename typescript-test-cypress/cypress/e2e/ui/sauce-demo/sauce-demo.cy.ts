import { roles } from '@config/config';
import { CartItems, HomePage, InventoryItem, InventoryPage, ShoppingCartPage } from '@page/sauce-demo';

describe('Swag Labs demo app', () => {
  const homePage = new HomePage();
  const inventoryPage = new InventoryPage();
  const shoppingCartPage = new ShoppingCartPage();

  before(() => {
    homePage.open();
    homePage.login(roles.sauceDemoRole);
  });

  after(() => {
    inventoryPage.header.logout();
  });

  it('Add item to shopping cart', () => {
    const itemToAdd = 'Backpack';

    inventoryPage.getAllItems().then((items: InventoryItem[]) => {
      const item = items.find((item) => item.name.includes(itemToAdd));
      expect(item).to.not.equal(undefined);
      item?.addToCart();
    });
    inventoryPage.header.openShoppingCart();
    shoppingCartPage.getCartItems().then((items: CartItems[]) => {
      expect(
        items.find((item) => item.name.includes(itemToAdd)),
        `Expected to find ${itemToAdd} from cart items`,
      ).to.not.equal(undefined);
    });
  });
});
