from base_selenium_element import Element, Elements

class HeaderElements(Elements):

    def __init__(self, browser) -> None:
        self.shopping_card_buttom = Element('.shopping_cart_link')
        self.menu_button = Element('#react-burger-menu-btn')
        self.logout_button = Element('div[aria-hidden="false"] #logout_sidebar_link')
        self.set_browser(browser)
