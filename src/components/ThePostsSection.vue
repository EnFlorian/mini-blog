<template>
  <!-- recent post without more functionality -->
  <PostsContainerVue :posts="featuredPosts" :title="'Featured posts'" />
  <!-- remaining posts  -->
  <PostsContainerVue :posts="remainingPosts" :title="'Latest Posts'" :pagination="true" :amount="7" />
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { PostsContainerVue } from "../components";
import { usePostsStore } from "../stores/postsStore";
// get posts from pinia

const postsStore = usePostsStore();
const posts = computed(() => postsStore.posts);
const featuredPosts = computed(() => posts.value.filter((post) => post.featured));
const remainingPosts = computed(() => posts.value.filter((post) => !post.featured));
</script>
