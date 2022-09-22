import { Author } from "./author";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: Author;
  coverImage: {
    src: string;
    alt: string;
  };
  date: string;
  read: number;
}
