<template>
  <ul class="list">
    <router-link
      v-for="item in store.state.content.results"
      :to="url + item.id"
      :key="item.id"
      class="link"
    >
      <ContentCard :item="item" />
    </router-link>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";

import ContentCard from "./ContentCard.vue";

const { type } = defineProps({
  type: String,
});
const url = type === "tv" ? "/tv/" : "/movies/";
const store = useStore();
</script>

<style lang="scss" scoped>
.list {
  color: #fff;
  text-decoration: none;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.link {
  background: #303b42;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  text-decoration: none;
  color: #fff;
}
</style>
