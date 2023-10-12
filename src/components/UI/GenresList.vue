<template>
  <p class="sort__title">Genres:</p>
  <ul class="genres">
    <li
      v-for="genre in store.state.sort.genres"
      :data-id="genre.id"
      :key="genre.id"
      :class="genre.isActive ? 'genre active' : 'genre'"
      @click="handleClick"
    >
      {{ genre.name }}
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";

const { title } = defineProps({
  title: String,
});

const store = useStore();

const handleClick = (el) => {
  store.commit("toggleGenreActive", el.srcElement.dataset.id);
};
</script>

<style lang="scss" scoped>
.genres {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.genre {
  padding: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 5px;
  background: #242e34;
  font-size: 12px;
  transition: background 0.3s ease-in-out;

  &.active {
    background: #3cbec9;
  }
}
</style>
