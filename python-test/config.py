import os

def get_password():
    if os.getenv('testpassword'):
        return os.getenv('testpassword')
    raise AttributeError('No password was set for the test role. Add environment variable testpassword')


def get_username():
    if os.getenv('testuser'):
        return os.getenv('testuser')
    raise AttributeError('No username was set for the test role. Add environment variable username')


def get_token():
    if os.getenv('token'):
        return os.getenv('token')
    raise AttributeError('No oauthToken was set for client. Add environment variable token')


def get_token_secret():
    if os.getenv('tokensecret'):
        return os.getenv('tokensecret')
    raise AttributeError('No oauthTokenSecret was set for the client. Add environment variable tokensecret')


def get_key():
    if os.getenv('key'):
        return os.getenv('key')
    raise AttributeError('No consumerKey was set for the client. Add environment variable key')


def get_key_secret():
    if os.getenv('keysecret'):
        return os.getenv('keysecret')
    raise AttributeError('No consumerSecret was set for the client. Add environment variable keysecret')

SITE_URL = {
    'sauce_demo': 'https://www.saucedemo.com/',
    'json_placeholder': 'https://jsonplaceholder.typicode.com',
}

WAIT_TIMEOUT = 20
REQUEST_TIMEOUT = 5000
