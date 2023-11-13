from base_selenium_page import BasePage
from pages.sauce_demo.home_elements import HomeElements
from config import SITE_URL

class HomePage(BasePage):

    def __init__(self, browser):
        super().__init__(browser)
        self.home_elements = HomeElements(browser)
        self.set_browser(browser)

    def open(self) -> None:
        self.open_url(SITE_URL['sauce_demo'])

    def login(self, username, password) -> None:
        self.home_elements.username_input.set_value(username)
        self.home_elements.password_input.set_value(password)
        self.home_elements.login_button.click()
