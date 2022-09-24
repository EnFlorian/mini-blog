import { defineStore } from "pinia";
import { fetchPosts } from "../mock-api/posts/api";

const posts = fetchPosts();

export const usePostsStore = defineStore({
  id: "postsStore",
  state: () => ({
    posts,
  }),
  actions: {
    getPosts() {
      return this.posts;
    },
    getPostById(id: string) {
      return this.posts.find((post) => post.id === id);
    },
    getPostsByCategory(category: string) {
      return this.posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    },
    getLatestPosts() {
      return this.posts.slice(0, 3);
    },
  },
});
