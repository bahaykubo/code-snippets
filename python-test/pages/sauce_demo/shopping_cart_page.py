from typing import NamedTuple

from base_selenium_page import BasePage
from pages.sauce_demo.header_page import HeaderPage
from pages.sauce_demo.shopping_cart_elements import ShoppingCartElements

class ShoppingCartItem(NamedTuple):
    index: int
    quantity: int
    name: str
    price: str
    remove_from_cart: callable

class ShoppingCartPage(BasePage):

    def __init__(self, browser):
        super().__init__(browser)
        self.header = HeaderPage(browser)
        self.shopping_cart_elements = ShoppingCartElements(self.browser)
        self.set_browser(browser)

    def continue_shopping(self) -> None:
        self.shopping_cart_elements.continue_shopping_button.click()

    def get_cart_items(self) -> list[ShoppingCartItem]:
        items: list[ShoppingCartItem] = []
        item_entries = self.shopping_cart_elements.items_list()
        for index, _ in enumerate(item_entries):
            items.append(
                ShoppingCartItem(
                    index,
                    quantity = int(self.shopping_cart_elements.items_quantity()[index].text),
                    name = self.shopping_cart_elements.items_name()[index].text,
                    price = self.shopping_cart_elements.items_price()[index].text,
                    remove_from_cart = self.shopping_cart_elements.items_remove_from_cart()[index].click
                )
            )
        return items
