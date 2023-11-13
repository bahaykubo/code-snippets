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

    def test_should_return_all_blog_posts(self):
        blog_posts_response = self.blog_post_service.get_all_posts()
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)

        blog_posts: list[BlogPost] = json_to_dictionary(blog_posts_response.text)
        for blog_post in blog_posts:
            self.expect(blog_post.__dict__).to_have_keys(['userId', 'id', 'title', 'body'])


    def test_should_return_blog_post_details(self):
        blog_posts_response = self.blog_post_service.get_post(self.blog_post.id)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)

        blog_post = json_to_dictionary(blog_posts_response.text)
        self.expect(blog_post.id).to_equal(1)


    def test_should_return_not_found_error_when_getting_post_with_an_invalid_id(self):
        blog_posts_response = self.blog_post_service.get_post('error')
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.NOT_FOUND.value)

    def test_should_return_blog_posts_of_a_user_given_a_user_id(self):
        blog_posts_response = self.blog_post_service.get_posts_by_user(self.blog_post.userId)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)

        blog_posts: list[BlogPost] = json_to_dictionary(blog_posts_response.text)
        for blog_post in blog_posts:
            self.expect(blog_post.userId).to_equal(self.blog_post.userId)

    def test_should_return_an_empty_list_if_user_does_not_exist(self):
        blog_posts_response = self.blog_post_service.get_posts_by_user('error')
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)

        blog_posts: list[BlogPost] = json_to_dictionary(blog_posts_response.text)
        self.expect(len(blog_posts)).to_equal(0)
