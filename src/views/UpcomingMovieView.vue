<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />

  <div v-else class="movies">
    <MoviesList />

    <div
      v-intersection="{
        currentPage: store.state.content.page,
        maxPages: store.state.content.total_pages,
        cb: cb,
      }"
      class="observer"
    ></div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import LoaderComponent from "@/components/LoaderComponent.vue";
import MoviesList from "@/components/MoviesList.vue";

const store = useStore();

const cb = () => {
  store.dispatch("loadMore", "/movie/upcoming");
};

onBeforeMount(() => {
  store.dispatch("getList", "/movie/upcoming");
});
</script>
