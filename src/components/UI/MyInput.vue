<template>
  <div class="sort__block sort__search">
    <p class="sort__title">{{ title }}:</p>
    <input
      @input="handleInput"
      :value="store.state.sort.currentValue"
      type="text"
      placeholder="Find movie..."
      class="sort__input"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const { title } = defineProps({
  title: String,
});

const store = useStore();

const handleInput = (e) => {
  store.commit("setSearchValue", e.target.value);
};
</script>

<style lang="scss" scoped>
.sort__input {
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: #242e34;
  border: none;
  color: #fff;
  font-size: 12px;
}
</style>
