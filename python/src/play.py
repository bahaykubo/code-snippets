import json
import requests
import time
from datetime import datetime


def sample():
    for i in range(0, 3):
        print(i)
        print(datetime.now().strftime('%Y/%m/%d %H:%M:%S'))
        print(time.time())
        print('time now {} plus 5 minutes is {}'.format(time.time(), time.time()+300))


def get_request():
    url = "https://reqres.in/api/users/1"
    headers = {
        'content-type': "application/json",
        'cache-control': "no-cache"
    }
    response = requests.request("GET", url, headers=headers)

    print('text is {}'.format(response.text))
    print('content is {}'.format(response.content))
    print('json is {}'.format(response.json))
    print('status code is {}'.format(response.status_code))
    print('pretty json is\n{}'.format(json.loads(json.dumps(response.text, indent=4))))


sample()
get_request()
