import { expect, Page, test } from '@playwright/test';
import { roles } from '@config/config';
import { CartItems, HomePage, InventoryItem, InventoryPage, ShoppingCartPage } from '@page/sauce-demo';

test.describe('Swag Labs demo app', () => {
  let page: Page;
  let homePage: HomePage;
  let inventoryPage: InventoryPage;
  let shoppingCartPage: ShoppingCartPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    inventoryPage = new InventoryPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await homePage.open();
    await homePage.login(roles.sauceDemoRole);
  });

  test.afterAll(async () => {
    await inventoryPage.header.logout();
  });

  test('Add item to shopping cart', async () => {
    const itemToAdd = 'Backpack';

    const item = await inventoryPage.getAllItems().then((items: InventoryItem[]) => {
      return items.find((item) => {
        return item.name.includes(itemToAdd);
      });
    });
    await item?.addToCart();
    await inventoryPage.header.openShoppingCart();
    await shoppingCartPage.getCartItems().then((items: CartItems[]) => {
      expect(
        items.find((item) => item.name.includes(itemToAdd)),
        `Expected to find ${itemToAdd} from cart items`,
      ).toBeTruthy;
    });
  });
});
