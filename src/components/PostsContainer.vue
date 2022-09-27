<template>
  <div class="posts-container">
    <h2 class="posts-container__title">{{ title }}</h2>
    <TransitionGroup appear class="posts-container__posts" name="posts" tag="ul">
      <PostCard v-for="post in renderedPosts" :key="post.id" :post="post" />
    </TransitionGroup>
    <button
      v-if="pagination && posts.length > renderedPosts.length"
      class="posts-container__pagination-button"
      @click="addMorePosts"
    >
      More
    </button>
  </div>
</template>

<script setup lang="ts">
import {} from "@vue/reactivity";
import { ref } from "vue";
import { IPost } from "../types/post";
import PostCard from "./PostCard.vue";

const props = defineProps<{
  title: string;
  posts: IPost[];
  pagination?: boolean;
  amount?: number;
}>();

let renderedPosts = ref(props.amount ? props.posts.slice(0, props.amount) : props.posts.slice(0, 3));

const addMorePosts = () => {
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

<style scoped lang="scss">
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__title {
    color: var(--clr-text-1);
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    width: fit-content;

    &::before {
      background-color: var(--clr-accent-1);
      bottom: -0.5rem;
      content: "";
      display: block;
      height: 0.3rem;
      left: 0;
      margin-top: 0.5rem;
      position: absolute;
      width: 100%;
    }
  }

  &__posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__pagination-button {
    background-color: var(--clr-bg-2);
    border-radius: 0.3rem;
    border: none;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    transition: var(--transition-fast);

    &:hover {
      color: var(--clr-accent-1);
      transform: scaleY(1.05);
    }
  }
}

.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
