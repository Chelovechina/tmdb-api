<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />
  <div v-else>
    <MovieBanner :movie="store.state.currentMovie" />
    <div class="container wrapper">
      <AsideInfo />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import MovieBanner from "../components/MovieBanner.vue";
import AsideInfo from "../components/AsideInfo.vue";

const store = useStore();
const route = useRoute();

onBeforeMount(() => {
  store.dispatch("getSingleMovie", route.params.id);
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
}
</style>
