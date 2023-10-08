<template>
  <div class="banner" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="container banner__wrapper">
      <PosterComponent
        :image-url="
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
          movie.poster_path
        "
      />
      <MovieInfo :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import PosterComponent from "./PosterComponent.vue";
import MovieInfo from "./MovieInfo.vue";

const { movie } = defineProps({
  movie: Object,
});
const imageUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`;
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 550px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;
  }

  &__wrapper {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}
</style>
