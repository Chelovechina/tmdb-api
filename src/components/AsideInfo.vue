<template>
  <aside class="aside">
    <ul class="aside__list">
      <li v-for="info in asideInfo" :key="info.title" class="aside__item">
        <h5 class="aside__title">{{ info.title }}</h5>
        <p class="aside__text">{{ info.text }}</p>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const { asideInfo } = defineProps({
  asideInfo: Array,
});
</script>

<style lang="scss" scoped>
.aside {
  &__list {
    width: 250px;
    background: #303b42;
    border-radius: 10px;
    padding: 20px;
    list-style: none;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  &__text {
    color: #fff;
    font-weight: 400;
  }
}
</style>
