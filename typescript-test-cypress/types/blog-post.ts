export type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type NewBlogPost = Omit<BlogPost, 'id'>;

export type UpdateBlogPost = Pick<BlogPost, 'id'> & Partial<Pick<BlogPost, 'title' | 'body'>>;
