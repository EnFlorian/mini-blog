import { IPost } from "../../types/post";
import { posts } from "./data";

export const fetchPosts = (): IPost[] => {
  return posts;
};
