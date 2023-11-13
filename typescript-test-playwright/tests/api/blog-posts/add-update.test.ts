import { expect, test } from '@playwright/test';
import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost, NewBlogPost, UpdateBlogPost } from '@type/blog-post';

test.describe('Add update blog posts', () => {
  let blogPosts: BlogPosts;
  let blogPost: BlogPost;

  test.beforeAll('Get a blog post to use for searching and updates', async ({ request }) => {
    blogPosts = new BlogPosts(request);

    await blogPosts.getAllPosts().then(async (response) => {
      expect(response.status()).toEqual(StatusCode.Ok);
      blogPost = (await response.json()).at(0);
    });
  });

  test.describe('Create blog post', () => {
    test('should add a new blog post', async () => {
      const newPost: NewBlogPost = {
        title: 'New Title',
        body: 'New blog details',
        userId: 1,
      };

      await blogPosts.addPost(newPost).then(async (response) => {
        expect(response.status()).toEqual(StatusCode.Created);
        expect(await response.json()).toHaveProperty('id');
      });
    });
  });

  test.describe('Update blog posts', () => {
    test('Should update an existing blog post', async () => {
      const postUpdate: UpdateBlogPost = {
        id: blogPost.id,
        title: 'this is the updated title',
      };

      await blogPosts.updatePost(postUpdate).then(async (response) => {
        expect(response.status()).toEqual(StatusCode.Ok);
        expect(await response.json()).toEqual(postUpdate);
      });
    });

    test('Should return an internal server error when updating a post that does not exist', async () => {
      const postUpdate: UpdateBlogPost = {
        // @ts-expect-error - Ignore type number requirement
        id: 'error',
        title: 'this should not update',
      };

      await blogPosts.updatePost(postUpdate).then((response) => {
        expect(response.status()).toEqual(StatusCode.InternalServerError);
      });
    });
  });
});
