from base_selenium_element import Element, Elements

class InventoryElements(Elements):

    def __init__(self, browser) -> None:
        self.items_list = Element('.inventory_item')
        self.items_name = Element('.inventory_item_name')
        self.items_price = Element('.inventory_item_price')
        self.add_to_card = Element('.btn_inventory')
        self.set_browser(browser)
