export type blogPostData = {
  blogPosts: BlogPost[];
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
};
