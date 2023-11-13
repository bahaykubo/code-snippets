import { test, expect } from '@playwright/test';
import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost } from '@type/blog-post';

test.describe('Get blog posts', () => {
  let blogPosts: BlogPosts;
  let blogPost: BlogPost;

  test.beforeAll('Get a blog post to use for searching and updates', async ({ request }) => {
    blogPosts = new BlogPosts(request);

    await blogPosts.getAllPosts().then(async (response) => {
      expect(response.status()).toEqual(StatusCode.Ok);
      blogPost = (await response.json()).at(0);
    });
  });

  test('should return all blog posts', async () => {
    await blogPosts.getAllPosts().then(async (response) => {
      const posts = (await response.json()) as BlogPost[];
      expect(posts).toBeInstanceOf(Array<BlogPost>);
      posts.forEach((post: BlogPost) => {
        validateBlogPostStructure(post);
      });
    });
  });

  test('should return blog post details', async () => {
    await blogPosts.getPost(blogPost.id).then(async (response) => {
      const post = (await response.json()) as BlogPost;
      validateBlogPostStructure(post);
    });
  });

  test('should return page not found error when getting a post with an invalid post id', async () => {
    // @ts-expect-error - Ignore type number requirement
    await blogPosts.getPost('error').then((response) => {
      expect(response.status()).toEqual(StatusCode.NotFound);
    });
  });

  test('should return blog posts of a user given a user id', async () => {
    await blogPosts.getPostsByUser(blogPost.userId).then(async (response) => {
      const posts = (await response.json()) as BlogPost[];
      expect(posts).toBeInstanceOf(Array<BlogPost>);
      posts.forEach((post: BlogPost) => {
        validateBlogPostStructure(post);
      });
    });
  });

  test('should return an empty list if user does not exist', async () => {
    // @ts-expect-error - Ignore type number requirement
    await blogPosts.getPostsByUser('error').then(async (response) => {
      const posts = (await response.json()) as BlogPost[];
      expect(posts).toBeInstanceOf(Array<BlogPost>);
      expect(posts.length).toEqual(0);
    });
  });

  const validateBlogPostStructure = (post: BlogPost): void => {
    expect(post).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });
  };
});
