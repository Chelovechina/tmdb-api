<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />

  <div v-else class="movies">
    <ContentsList type="tv" />

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
import ContentsList from "@/components/ContentsList.vue";

const store = useStore();

const cb = () => {
  store.dispatch("loadMore", "/tv/popular");
};

onBeforeMount(() => {
  store.dispatch("getList", "/tv/popular");
});
</script>
