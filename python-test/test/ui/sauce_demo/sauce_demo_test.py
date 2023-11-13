import pytest
from base_selenium_test import BrowserTestCase
from pages.sauce_demo.home_page import HomePage
from pages.sauce_demo.inventory_page import InventoryPage
from pages.sauce_demo.shopping_cart_page import ShoppingCartPage

@pytest.mark.saucedemo
class ExampleTestCase(BrowserTestCase):

    def setUp(self):
        self.home_page = HomePage(self.browser)
        self.inventory = InventoryPage(self.browser)
        self.shopping_cart = ShoppingCartPage(self.browser)

    def test_this(self):
        self.home_page.open()
        self.home_page.login('standard_user', 'secret_sauce')

        inventory_items = self.inventory.get_all_items()
        [item for item in inventory_items if 'Backpack' in item.name][0].add_to_cart()

        self.inventory.header.open_shopping_cart()
        shopping_cart_items = self.shopping_cart.get_cart_items()

        assert len(shopping_cart_items) == 1
        assert 'Backpack' in shopping_cart_items[0].name

        self.shopping_cart.header.logout()
