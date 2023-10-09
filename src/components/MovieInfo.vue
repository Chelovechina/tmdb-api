<template>
  <div class="info">
    <div class="info__block block">
      <h1 class="info__title">{{ movie.title }}</h1>
      <p class="info__created">
        {{ movie.release_date }} ({{ movie.production_countries[0].name }})
      </p>
      <p class="info__genres">
        <span v-for="genre in movie.genres" :key="genre.id"
          >{{ genre.name }};
        </span>
      </p>
    </div>
    <div class="info__block block block-rating">
      <div class="block__rating">
        <h4 class="block__title">Rating</h4>
        <h4 class="block__title">{{ movie.vote_average.toFixed(1) }}</h4>
      </div>
      <div class="progress">
        <div
          class="progress__inner"
          :style="{ width: movie.vote_average * 10 + '%' }"
        ></div>
      </div>
    </div>
    <div class="info__block block">
      <h4 class="block__title">Overview</h4>
      <p>{{ movie.overview }}</p>
    </div>
    <div class="info__block block">
      <h4 class="block__title">{{ director.name }}</h4>
      <p>Director</p>
    </div>
    <button @click="toggleTrailer" class="info__btn">Play Trailer</button>
    <TrailerPlayer
      :isActive="isActive"
      :videoUrl="videoUrl"
      :handleClick="toggleTrailer"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TrailerPlayer from "./TrailerPlayer.vue";

const { movie } = defineProps({
  movie: Object,
});

const director = movie.credits.crew.find((person) => person.job === "Director");
const video = movie.videos.results.find((video) => video.type === "Trailer");
const videoUrl = `https://www.youtube.com/embed/${video.key}`;
const isActive = ref(false);

const toggleTrailer = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss">
.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  max-width: 690px;

  &__title {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__btn {
    width: 130px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    background: #3cbec9;
    color: #fff;
    font-weight: 700;
  }
}

.block {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &-rating {
    width: 300px;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
}

.progress {
  width: 100%;
  height: 2px;
  background: #242e34;

  &__inner {
    height: 100%;
    background: #3cbec9;
  }
}
</style>
