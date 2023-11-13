from base_selenium_element import Element, Elements

class ShoppingCartElements(Elements):

    def __init__(self, browser) -> None:
        self.continue_shopping_button = Element('#continue-shopping')
        self.items_list = Element('.cart_item')
        self.items_quantity = Element('.cart_quantity')
        self.items_name = Element('.inventory_item_name')
        self.items_price = Element('.inventory_item_price')
        self.items_remove_from_cart = Element('button[id*="remove"]')
        self.set_browser(browser)
