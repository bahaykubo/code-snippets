from base_selenium_element import Element, Elements

class HomeElements(Elements):

    def __init__(self, browser) -> None:
        self.username_input = Element('#user-name')
        self.password_input = Element('#password')
        self.login_button = Element('#login-button')
        self.set_browser(browser)
