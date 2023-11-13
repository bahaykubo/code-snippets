from time import sleep
from base_selenium_page import BasePage
from pages.sauce_demo.header_elements import HeaderElements

class HeaderPage(BasePage):

    def __init__(self, browser):
        super().__init__(browser)
        self.home_elements = HeaderElements(self.browser)
        self.set_browser(browser)

    def open_shopping_cart(self) -> None:
        self.home_elements.shopping_card_buttom.click()

    def open_menu(self) -> None:
        self.home_elements.menu_button.click()

    def logout(self) -> None:
        self.open_menu()
        # sleep(5)
        self.home_elements.logout_button.click()
