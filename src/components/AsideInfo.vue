<template>
  <aside class="aside">
    <ul class="aside__list">
      <AsideItem v-for="item in asideInfo" :item="item" :key="item.text" />
    </ul>
  </aside>
</template>

<script setup>
import AsideItem from "./UI/AsideItem.vue";

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
}
</style>
