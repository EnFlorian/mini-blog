import { Post } from "../../types/post";
import { posts } from "./data";

export const fetchPosts = (): Post[] => {
  return posts;
};
