from typing import NamedTuple

from base_selenium_page import BasePage
from pages.sauce_demo.header_page import HeaderPage
from pages.sauce_demo.inventory_elements import InventoryElements

class InventoryItem(NamedTuple):
    name: str
    price: str
    add_to_cart: callable

class InventoryPage(BasePage):

    def __init__(self, browser):
        super().__init__(browser)
        self.header = HeaderPage(browser)
        self.inventory_elements = InventoryElements(self.browser)
        self.set_browser(browser)

    def get_all_items(self) -> list[InventoryItem]:
        items: list[InventoryItem] = []
        item_entries = self.inventory_elements.items_list()
        for index, _ in enumerate(item_entries):
            items.append(
                InventoryItem(
                    name = self.inventory_elements.items_name()[index].text,
                    price = self.inventory_elements.items_price()[index].text,
                    add_to_cart = self.inventory_elements.add_to_card()[index].click,
                )
            )
        return items
