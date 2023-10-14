<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />
  <div v-else>
    <div class="banner" :style="{
      backgroundImage:
        'url(' + url + store.state.currentMovie.backdrop_path + ')',
    }">
      <div class="container banner__wrapper">
        <ItemPoster :image-url="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
          store.state.currentMovie.poster_path
          " />
        <MovieInfo :item="store.state.currentMovie" />
      </div>
    </div>
    <div class="container wrapper">
      <AsideInfo :aside-info="store.getters.getMovieAside" />
      <CastComponent title="Top Billed Cast" type="movie" :casts="store.getters.getMovieCast" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import ItemPoster from "../components/UI/ItemPoster.vue";
import AsideInfo from "../components/AsideInfo.vue";
import CastComponent from "../components/CastComponent.vue";
import MovieInfo from "@/components/MovieInfo.vue";

const store = useStore();
const route = useRoute();

const url = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

onBeforeMount(() => {
  store.dispatch("getSingle", { type: "movie", id: route.params.id });
});
</script>

<style lang="scss" scoped>
.banner {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
}

.banner__wrapper {
  position: relative;
  z-index: 5;
  display: flex;
  gap: 30px;
  padding: 50px;
  align-items: center;
}

.wrapper {
  display: flex;
  padding: 40px 0;
  gap: 40px;
}
</style>
