<template>
  <div class="category-container">
    <h2 class="category-container__title">{{ title }}</h2>
    <div class="category-container__posts">
      <PostCardVue v-for="post in renderedPosts" :key="post.id" :post="post" />
    </div>
    <div v-if="pagination && posts.length > renderedPosts.length" class="category-container__pagination">
      <button class="category-container__pagination-button" @click="addMorePosts">Load more</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "@vue/reactivity";
import { ref } from "vue";
import { IPost } from "../types/post";

const props = defineProps<{
  title: string;
  posts: IPost[];
  pagination?: boolean;
  amount?: number;
}>();

let renderedPosts = ref(props.amount ? props.posts.slice(0, props.amount) : props.posts.slice(0, 3));

const addMorePosts = () => {
  console.log(renderedPosts.value.length);
  if (props.amount) {
    renderedPosts.value = [
      ...renderedPosts.value,
      ...props.posts.slice(renderedPosts.value.length, renderedPosts.value.length + props.amount),
    ];
  } else {
    renderedPosts.value = [
      ...renderedPosts.value,
      ...props.posts.slice(renderedPosts.value.length, renderedPosts.value.length + 3),
    ];
  }
};
</script>
