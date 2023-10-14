<template>
  <li class="movie__item">
    <img
      :src="
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + item.poster_path
      "
      :alt="item.title"
      class="movie__img"
    />

    <div class="movie__info">
      <h4 class="movie__title">{{ item.title || item.name }}</h4>
      <p class="movie__date">
        {{ item.release_date || item.first_air_date }}
      </p>

      <div class="movie__rating">
        <h4 class="movie__title">Rating</h4>
        <h4 class="movie__title">{{ item.vote_average.toFixed(1) }}</h4>
      </div>

      <ProgressBar :width="item.vote_average" />
    </div>
  </li>
</template>

<script setup>
import ProgressBar from "./UI/ProgressBar.vue";

const { item } = defineProps({ item: Object });
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
