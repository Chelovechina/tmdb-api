<template>
  <p class="sort__title">{{ title }}:</p>
  <select @change="handleChange" :value="store.state.sort.activeSort" class="sort__select">
    <option v-for="sort in sortBy" :key="sort.value" :value="sort.value">
      {{ sort.title }}
    </option>
  </select>
</template>

<script setup>
import { useStore } from "vuex";

const { title } = defineProps({
  title: String,
});

const store = useStore();
const sortBy = store.state.sort?.sortBy;

const handleChange = (e) => {
  store.commit("setActiveSort", e.target.value);
};
</script>

<style lang="scss" scoped>
.sort__select {
  display: flex;
  padding: 10px 5px;
  border-radius: 5px;
  background: #242e34;
  border: none;
  color: #fff;
}
</style>
