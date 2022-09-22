<template>
  <div class="bg-slate-800">
    <TheNavbarVue />
    <div class="">
      <RouterView />
    </div>
    <TheFooterVue />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { TheNavbarVue, TheFooterVue } from "./components";
</script>
