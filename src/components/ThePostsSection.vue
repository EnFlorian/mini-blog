<template>
  <section class="posts-section container-md">
    <PostsContainerVue :posts="featuredPosts" :title="'Featured posts'" />
    <PostsContainerVue :posts="remainingPosts" :title="'Latest Posts'" :pagination="true" />
  </section>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { PostsContainerVue } from "../components";
import { usePostsStore } from "../stores/postsStore";

const postsStore = usePostsStore();
const posts = computed(() => postsStore.posts);
const featuredPosts = computed(() => posts.value.filter((post) => post.featured));
const remainingPosts = computed(() => posts.value.filter((post) => !post.featured));
</script>

<style scoped lang="scss">
.posts-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
