export type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// this type derives from the BlogPost interface excluding the id property
export type NewBlogPost = Omit<BlogPost, 'id'>;

// this type derives from the BlogPost interface including the id with the title and body as optional
export type UpdateBlogPost = Pick<BlogPost, 'id'> & Partial<Pick<BlogPost, 'title' | 'body'>>;
