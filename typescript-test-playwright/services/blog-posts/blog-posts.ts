import { siteUrl } from '@config/config';
import { APIRequestContext, APIResponse } from '@playwright/test';
import { NewBlogPost, UpdateBlogPost } from '@type/blog-post';

export class BlogPosts {
  private request: APIRequestContext;
  private readonly baseURL = siteUrl.jsonplaceholder;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllPosts(): Promise<APIResponse> {
    return await this.request.get(`${this.baseURL}/posts`);
  }

  async getPostsByUser(userId: number): Promise<APIResponse> {
    return await this.request.get(`${this.baseURL}/posts`, { params: { userId } });
  }

  async getPost(id: number): Promise<APIResponse> {
    return await this.request.get(`${this.baseURL}/posts/${id}`);
  }

  async addPost(post: NewBlogPost): Promise<APIResponse> {
    return await this.request.post(`${this.baseURL}/posts`, { data: post });
  }

  async updatePost(post: UpdateBlogPost): Promise<APIResponse> {
    const { id, ...update } = post;
    return await this.request.put(`${this.baseURL}/posts/${id}`, { data: update });
  }

  // return type is an empty object
  async deletePost(id: number): Promise<APIResponse> {
    return await this.request.delete(`${this.baseURL}/posts/${id}`);
  }
}
