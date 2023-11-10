import json
import requests
import time
from datetime import datetime


def sample():
    for i in range(0, 3):
        print(i)
        print(datetime.now().strftime('%Y/%m/%d %H:%M:%S'))
        print(time.time())
        print(f'time now {time.time()} plus 5 minutes is {time.time() + 300}')


def get_request():
    url = "https://reqres.in/api/users/1"
    headers = {
        'content-type': "application/json",
        'cache-control': "no-cache"
    }
    response = requests.request("GET", url, headers=headers, timeout=10)

    print(f'text is {response.text}')
    print(f'content is {response.content}')
    print(f'json is {response.json}')
    print(f'status code is {response.status_code}')
    print(f'pretty json is\n{json.loads(json.dumps(response.text, indent=4))}')


sample()
get_request()
