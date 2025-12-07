export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface BasicPost {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
}
