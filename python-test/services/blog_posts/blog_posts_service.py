from attr import dataclass
import requests
from config import REQUEST_TIMEOUT, SITE_URL

@dataclass
class NewBlogPost:
    userId: int
    title: str
    body: str

@dataclass
class BlogPost(NewBlogPost):
    id: int

@dataclass
class UpdateBlogPost():
    id: int
    title: str = None
    body: str = None

    @property
    def data(self):
        return {'title': self.title, 'body': self.body}

class BlogPostsService():

    def __init__(self):
        self.base_url = SITE_URL['json_placeholder']

    def get_all_posts(self):
        return requests.get(f'{self.base_url}/posts', timeout=REQUEST_TIMEOUT)

    def get_posts_by_user(self, user_id: int):
        return requests.get(f'{self.base_url}/posts', params=[('userId', user_id)], timeout=REQUEST_TIMEOUT)

    def get_post(self, id: int):
        return requests.get(f'{self.base_url}/posts/{id}', timeout=REQUEST_TIMEOUT)

    def add_post(self, post: NewBlogPost):
        return requests.post(f'{self.base_url}/posts', data=post.__dict__, timeout=REQUEST_TIMEOUT)

    def update_post(self, update: UpdateBlogPost):
        return requests.put(
            f'{self.base_url}/posts/{update.id}',
            data=update.data,
            timeout=5000
        )

    def delete_post(self, id: int):
        return requests.delete(f'{self.base_url}/posts/{id}', timeout=REQUEST_TIMEOUT)
