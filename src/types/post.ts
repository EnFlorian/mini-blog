import { IAuthor } from "./author";

export interface IPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  author: IAuthor;
  coverImage: {
    src: string;
    alt: string;
  };
  date: string;
  read: number;
}
