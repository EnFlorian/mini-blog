import { IAuthor } from "./author";

export interface IPost {
  id: string;
  featured: boolean;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: IAuthor;
  coverImage: {
    src: string;
    alt: string;
  };
  date: string;
  read: number;
}
