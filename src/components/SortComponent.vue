<template>
  <div class="sort">
    <MyInput title="Search" />
    <div class="sort__block">
      <div class="sort__item">
        <MySelect title="Sort Results By" />
      </div>
      <div class="sort__item">
        <GenresList />
      </div>
    </div>
    <button :disabled="!store.state.sort.isChanged" @click="handleClick">
      Search
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

import MyInput from "./UI/MyInput.vue";
import MySelect from "./UI/MySelect.vue";
import GenresList from "./UI/GenresList.vue";

const store = useStore();

const handleClick = () => {
  store.dispatch("getList", "discover/movie");
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__block {
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    background: #303b42;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    color: #fff;
    font-size: 14px;
  }
}
</style>
