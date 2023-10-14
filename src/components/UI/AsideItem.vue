<template>
  <li class="aside__item">
    <h5 class="aside__title">{{ item.title }}</h5>
    <p class="aside__text">{{ item.text }}</p>
  </li>
</template>

<script setup>
const { item } = defineProps({ item: Object });
</script>

<style lang="scss" scoped>
.aside {
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
