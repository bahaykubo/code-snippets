import logging


def log_me():
    logging.basicConfig(
        filename='.//logs//example.log',
        level=logging.DEBUG,
        format='%(asctime)s %(levelname)s %(message)s',
        filemode='a'
    )
    logging.error('error')


log_me()
