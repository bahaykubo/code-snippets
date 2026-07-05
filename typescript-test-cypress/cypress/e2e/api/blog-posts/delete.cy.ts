import { BlogPosts } from '@service/blog-posts';
import { StatusCode } from '@constant/http-response-codes';
import { BlogPost } from '@type/blog-post';

describe('Delete blog posts', () => {
  const blogPosts = new BlogPosts();
  let blogPost: BlogPost;

  beforeEach('Get a blog post to use for searching and updates', () => {
    blogPosts.getAllPosts().then((response) => {
      expect(response.status).to.eq(StatusCode.Ok);
      blogPost = response.body[0];
    });
  });

  it('Should remove an existing blog post', () => {
    blogPosts.deletePost(blogPost.id).then((response) => {
      expect(response.status).to.eq(StatusCode.Ok);
    });
  });
});
