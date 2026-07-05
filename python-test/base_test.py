import unittest
from playwright.sync_api import sync_playwright


class Browser:

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Browser, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.playwright = sync_playwright().start()
        self.playwright_browser = self.playwright.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-dev-shm-usage'],
        )
        self.context = self.playwright_browser.new_context(viewport={'width': 1280, 'height': 1024})
        self.browser = self.context.new_page()


class BrowserTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        super(BrowserTestCase, cls).setUpClass()
        instance = Browser()
        cls.browser = instance.browser
        cls.context = instance.context
        cls.playwright_browser = instance.playwright_browser
        cls.playwright = instance.playwright
        cls.context.clear_cookies()

    @classmethod
    def tearDownClass(cls):
        cls.context.clear_cookies()
        cls.playwright_browser.close()
        cls.playwright.stop()
        super(BrowserTestCase, cls).tearDownClass()
