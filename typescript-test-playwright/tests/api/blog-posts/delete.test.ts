import { test, expect } from '@playwright/test';
import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost } from '@type/blog-post';

test.describe('Delete blog posts', () => {
  let blogPosts: BlogPosts;
  let blogPost: BlogPost;

  test.beforeAll('Get a blog post to use for searching and updates', async ({ request }) => {
    blogPosts = new BlogPosts(request);

    await blogPosts.getAllPosts().then(async (response) => {
      expect(response.status()).toEqual(StatusCode.Ok);
      blogPost = (await response.json()).at(0);
    });
  });

  test('Should remove an existing blog post', async () => {
    await blogPosts.deletePost(blogPost.id).then((response) => {
      expect(response.status()).toEqual(StatusCode.Ok);
    });
  });
});
