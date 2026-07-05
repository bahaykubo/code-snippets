import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost } from '@type/blog-post';

describe('Get blog posts', () => {
  const blogPosts = new BlogPosts();
  let blogPost: BlogPost;

  beforeEach('Get a blog post to use for searching and updates', () => {
    blogPosts.getAllPosts().then((response) => {
      expect(response.status).to.eq(StatusCode.Ok);
      blogPost = response.body[0];
    });
  });

  it('should return all blog posts', () => {
    blogPosts.getAllPosts().then((response) => {
      const posts = response.body as BlogPost[];
      expect(posts).to.be.an('Array');
      posts.forEach((post) => {
        validateBlogPostStructure(post);
      });
    });
  });

  it('should return blog post details', () => {
    blogPosts.getPost(blogPost.id).then((response) => {
      validateBlogPostStructure(response.body as BlogPost);
    });
  });

  it('should return page not found error when getting a post with an invalid post id', () => {
    // @ts-expect-error - Ignore type number requirement
    blogPosts.getPost('error', { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(StatusCode.NotFound);
    });
  });

  it('should return blog posts of a user given a user id', () => {
    blogPosts.getPostsByUser(blogPost.userId).then((response) => {
      const posts = response.body as BlogPost[];
      expect(posts).to.be.an('Array');
      posts.forEach((post) => {
        expect(post).property('userId').to.eq(blogPost.userId);
      });
    });
  });

  it('should return an empty list if user does not exist', () => {
    // @ts-expect-error - Ignore type number requirement
    blogPosts.getPostsByUser('error').then((response) => {
      const posts = response.body as BlogPost[];
      expect(posts).to.be.an('Array');
      expect(posts).to.have.lengthOf(0);
    });
  });

  const validateBlogPostStructure = (post: BlogPost): void => {
    expect(post).to.have.all.keys(['userId', 'id', 'title', 'body']);
  };
});
