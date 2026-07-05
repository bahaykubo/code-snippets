import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost, NewBlogPost, UpdateBlogPost } from '@type/blog-post';

describe('Add update blog posts', () => {
  const blogPosts = new BlogPosts();
  let blogPost: BlogPost;

  beforeEach('Get a blog post to use for searching and updates', () => {
    blogPosts.getAllPosts().then((response) => {
      expect(response.status).to.eq(StatusCode.Ok);
      blogPost = response.body[0];
    });
  });

  context('Create blog post', () => {
    it('should add a new blog post', () => {
      const newPost: NewBlogPost = {
        title: 'New Title',
        body: 'New blog details',
        userId: 1,
      };

      blogPosts.addPost(newPost).then((response) => {
        expect(response.status).to.eq(StatusCode.Created);
        expect(response.body).to.have.property('id');
      });
    });
  });

  context('Update blog posts', () => {
    it('Should update an existing blog post', () => {
      const postUpdate: UpdateBlogPost = {
        id: blogPost.id,
        title: 'this is the updated title',
      };

      blogPosts.updatePost(postUpdate).then((response) => {
        expect(response.status).to.eq(StatusCode.Ok);
        expect(response.body).to.include(postUpdate);
      });
    });

    it('Should return an internal server error when updating a post that does not exist', () => {
      const postUpdate: UpdateBlogPost = {
        // @ts-expect-error - Ignore type number requirement
        id: 'error',
        title: 'this should not update',
      };

      blogPosts.updatePost(postUpdate, { failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(StatusCode.InternalServerError);
      });
    });
  });
});
