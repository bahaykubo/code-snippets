from enum import Enum

class HttpStatusCode(Enum):
    OK = 200
    CREATED = 201
    NOT_FOUND = 404
    INTERNAL_SERVER_ERROR = 500
