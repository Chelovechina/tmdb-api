<template>
  <div class="container">
    <LoaderComponent v-if="store.state.status === 'loading'" />
    <div v-else class="home">
      <h1 class="home__title title">Top rated Movies</h1>
      <SliderComponent />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import LoaderComponent from "./../components/LoaderComponent.vue";
import SliderComponent from "./../components/SliderComponent.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getPopularMovies");
});
</script>

<style lang="scss" scoped>
.home {
  padding: 40px 0;

  &__title {
    margin-bottom: 25px;
  }
}
</style>
