from base_browser import Browser
import config

class Elements(Browser):

    def set_browser(self, browser):
        for element in self.__dict__.values():
            if isinstance(element, Element):
                element.set_browser(browser)


class Element(Browser):

    def __init__(self, locator):
        self.locator = locator

    def _locator(self):
        return self.browser.locator(self.locator)

    def __call__(self):
        locator = self._locator()
        locator.first.wait_for(timeout=config.WAIT_TIMEOUT * 1000)
        return locator.all()

    def click(self, index=0):
        self._locator().nth(index).click(timeout=config.WAIT_TIMEOUT * 1000)

    def set_value(self, value, index=0):
        self._locator().nth(index).fill(value, timeout=config.WAIT_TIMEOUT * 1000)

    def send_key(self, key):
        self.browser.keyboard.press(key)
