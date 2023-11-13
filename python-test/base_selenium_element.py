from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

from base_selenium_browser import Browser
import config

class Elements(Browser):

    def set_browser(self, browser):
        for element in self.__dict__.values():
            if isinstance(element, Element):
                element.set_browser(browser)


class Element(Browser):

    def __init__(self, locator):
        self.locator = locator
        self.is_xpath_locator = locator.startswith('//')

    def __call__(self):
        WebDriverWait(self.browser, config.WAIT_TIMEOUT).until(
            lambda driver: len(driver.find_elements(By.XPATH if self.is_xpath_locator else By.CSS_SELECTOR, self.locator)),
            f'URL: {self.browser.current_url} | Waiting for {self.locator}, but did not show up in time'
        )
        return self.browser.find_elements(By.XPATH if self.is_xpath_locator else By.CSS_SELECTOR, self.locator)

    def wait_to_be_clickable(self):
        WebDriverWait(self.browser, config.WAIT_TIMEOUT).until(
            expected_conditions.element_to_be_clickable((By.XPATH if self.is_xpath_locator else By.CSS_SELECTOR, self.locator))
        )

    def click(self, index=0):
        element = self()[index]
        self.wait_to_be_clickable()
        self.move_to(index)
        element.click()

    def set_value(self, value, index=0):
        element = self()[index]
        self.move_to(index)
        element.clear()
        element.send_keys(value)

    def send_key(self, key):
        actions = ActionChains(self.browser)
        actions.key_down(key)
        actions.perform()

    def move_to(self, index=0):
        actions = ActionChains(self.browser)
        actions.move_to_element(self()[index])
        actions.perform()
