<template>
  <li class="movie__item">
    <img
      :src="
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path
      "
      :alt="movie.title"
      class="movie__img"
    />

    <div class="movie__info">
      <h4 class="movie__title">{{ movie.title || movie.name }}</h4>
      <p class="movie__date">{{ movie.release_date }}</p>

      <div class="movie__rating">
        <h4 class="movie__title">Rating</h4>
        <h4 class="movie__title">{{ movie.vote_average.toFixed(1) }}</h4>
      </div>

      <ProgressBar :width="movie.vote_average" />
    </div>
  </li>
</template>

<script setup>
import ProgressBar from "./UI/ProgressBar.vue";

const { movie } = defineProps({ movie: Object });
</script>

<style lang="scss" scoped>
.movie {
  &__img {
    width: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 14px;
    font-weight: 600;
  }

  &__date {
    font-size: 12px;
  }
}
</style>
