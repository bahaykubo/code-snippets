import { siteUrl } from '@config/config';
import { NewBlogPost, UpdateBlogPost } from '@type/blog-post';

export class BlogPosts {
  private readonly baseUrl = siteUrl.jsonplaceholder;

  getAllPosts() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/posts`,
    });
  }

  getPostsByUser(userId: number) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/posts`,
      qs: { userId },
    });
  }

  getPost(id: number, otherOptions: Partial<Cypress.RequestOptions> = {}) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/posts/${id}`,
      ...otherOptions,
    });
  }

  addPost(post: NewBlogPost) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/posts`,
      body: post,
    });
  }

  updatePost(post: UpdateBlogPost, otherOptions: Partial<Cypress.RequestOptions> = {}) {
    const { id, ...update } = post;
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/posts/${id}`,
      body: update,
      ...otherOptions,
    });
  }

  deletePost(id: number, otherOptions: Partial<Cypress.RequestOptions> = {}) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/posts/${id}`,
      ...otherOptions,
    });
  }
}
