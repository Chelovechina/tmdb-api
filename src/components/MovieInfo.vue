<template>
  <div class="info">
    <div class="info__block block">
      <h1 class="info__title">{{ item.title }}</h1>
      <p class="info__created">
        {{ item.release_date }} ({{ item.production_countries[0].name }})
      </p>
      <p class="info__genres">
        <SpanList :genres="item.genres" />
      </p>
    </div>
    <div class="info__block block block-rating">
      <div class="block__rating">
        <h4 class="block__title">Rating</h4>
        <h4 class="block__title">{{ item.vote_average.toFixed(1) }}</h4>
      </div>
      <ProgressBar :width="item.vote_average" />
    </div>
    <InfoBlock title="Overview" :text="item.overview" />
    <InfoBlock :title="director.name" text="Director" />
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
import SpanList from "./UI/SpanList.vue";
import ProgressBar from "./UI/ProgressBar.vue";
import InfoBlock from "./UI/InfoBlock.vue";

const { item } = defineProps({
  item: Object,
});

const director = item.credits.crew.find((person) => person.job === "Director");
const video = item.videos.results.find((video) => video.type === "Trailer");
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
</style>
