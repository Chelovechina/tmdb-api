<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />
  <div v-else>
    <MovieBanner :movie="store.state.currentMovie" />
    <div class="container wrapper">
      <AsideInfo :aside-info="store.getters.getMovieAside" />
      <CastComponent
        title="Top Billed Cast"
        type="movie"
        :casts="store.getters.getMovieCast"
      />
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
import CastComponent from "../components/CastComponent.vue";

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
  gap: 40px;
}
</style>
