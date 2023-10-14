<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />

  <div v-else class="container wrapper">
    <CastComponent
      title="Popular People"
      type="people"
      :casts="store.state.content.results"
    />

    <div
      v-intersection="{
        currentPage: store.state.content.page,
        maxPages: store.state.content.total_pages,
        cb: cb,
      }"
      class="observer"
    />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import CastComponent from "../components/CastComponent.vue";

const store = useStore();

const cb = () => {
  store.dispatch("loadMore", "/person/popular");
};

onBeforeMount(() => {
  store.dispatch("getList", "person/popular");
});
</script>
