import pytest
from enums.http_enums import HttpStatusCode

from services.blog_posts.blog_posts_service import BlogPost, BlogPostsService
from services.utils.http_assertion_utils import HttpAssertion
from services.utils.json_utils import json_to_dictionary

@pytest.mark.blogpost
class TestExample():

    def setup(self):
        self.blog_post_service = BlogPostsService()
        self.expect = HttpAssertion()

        blog_posts_response = self.blog_post_service.get_all_posts()
        blog_posts_response.raise_for_status()
        self.blog_post: BlogPost = json_to_dictionary(blog_posts_response.text)[0]

    def test_should_remove_an_existing_blog_post(self):
        blog_posts_response = self.blog_post_service.delete_post(self.blog_post.id)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)
