<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />
  <div v-else>
    <MovieBanner :movie="store.state.currentMovie" />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import MovieBanner from "../components/MovieBanner.vue";

const store = useStore();
const route = useRoute();

onBeforeMount(() => {
  store.dispatch("getSingleMovie", route.params.id);
});
</script>

<style lang="scss" scoped></style>
