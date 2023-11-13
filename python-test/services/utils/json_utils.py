import json
from types import SimpleNamespace


def json_to_dictionary(json_string: str):
    return json.loads(json_string, object_hook=lambda d: SimpleNamespace(**d))

def print_json(json_any: any):
    print(json.dumps(json_any, indent=2))
