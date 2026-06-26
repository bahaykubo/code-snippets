import config


class BaseService:

    def app_authentication(self):
        return (f'OAuth oauth_consumer_key="{config.get_key()}", '
                f'oauth_signature_method="PLAINTEXT", '
                f'oauth_signature="{config.get_key_secret()}&"')

    def member_authentication(self):
        return (f'OAuth oauth_consumer_key="{config.get_key()}", '
                f'oauth_token="{config.get_token()}", oauth_signature_method="PLAINTEXT", '
                f'oauth_signature="{config.get_key_secret()}&'
                f'{config.get_token_secret()}"')
