import pytest
from enums.http_enums import HttpStatusCode

from services.blog_posts.blog_posts_service import BlogPost, BlogPostsService, NewBlogPost, UpdateBlogPost
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

    def test_should_add_a_new_blog_post(self):
        new_blog_post = NewBlogPost(userId=1, title='New Title', body='New blog details')

        blog_posts_response = self.blog_post_service.add_post(new_blog_post)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.CREATED.value)

    def test_should_update_an_existing_blog_post(self):
        update_blog_post = UpdateBlogPost(id=self.blog_post.id, title='This is the updated title')

        blog_posts_response = self.blog_post_service.update_post(update_blog_post)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.OK.value)

        blog_post: BlogPost = json_to_dictionary(blog_posts_response.text)
        self.expect(blog_post.title).to_equal(update_blog_post.title)

    def test_should_return_an_error_when_updating_a_post_that_does_not_exist(self):
        update_blog_post = UpdateBlogPost(id='error', title='This should not update')

        blog_posts_response = self.blog_post_service.update_post(update_blog_post)
        self.expect(blog_posts_response.status_code).to_equal(HttpStatusCode.INTERNAL_SERVER_ERROR.value)
