<template>
  <div class="info">
    <div class="info__block block">
      <h1 class="info__title">{{ item.name }}</h1>
      <p class="info__created">
        {{ item.first_air_date }} ({{ item.production_countries[0].name }})
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
  </div>
</template>

<script setup>
import SpanList from "./UI/SpanList.vue";
import ProgressBar from "./UI/ProgressBar.vue";
import InfoBlock from "./UI/InfoBlock.vue";

const { item } = defineProps({
  item: Object,
});
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
