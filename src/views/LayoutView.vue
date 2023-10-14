<template>
  <div class="container layout">
    <h1 class="layout__title">{{ title }}</h1>

    <div class="layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import SortComponent from "./../components/SortComponent.vue";

const { title, type } = defineProps({ title: String, type: String });
const store = useStore();

onBeforeMount(() => {
  if (type === "movie") store.dispatch("getMovieGenres");
  if (type === "tv") store.dispatch("getTVGenres");
});
</script>

<style lang="scss" scoped>
.layout {
  padding: 40px 0;

  &__title {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

  &__wrapper {
    display: flex;
    gap: 30px;
  }
}
</style>
