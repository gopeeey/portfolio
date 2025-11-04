export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface BasicPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  updated_at: string;
  author: string;
}

export interface Post extends Omit<BasicPost, "author"> {
  content: string;
  created_at: string;
  author: Author;
}
