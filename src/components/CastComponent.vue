<template>
  <div class="cast">
    <h3 class="cast__title">{{ title }}</h3>

    <ul class="cast__list">
      <CastItem
        v-for="cast in casts"
        :item="cast"
        :type="type"
        :key="cast.id"
      />
    </ul>
  </div>
</template>

<script setup>
import CastItem from "./UI/CastItem.vue";

const { casts, type, title } = defineProps({
  casts: Array,
  title: String,
  type: String,
});
</script>

<style lang="scss" scoped>
.cast {
  color: #fff;
  width: 100%;

  &__title {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
}
</style>
