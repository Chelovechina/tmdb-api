<template>
  <div class="container">
    <LoaderComponent v-if="store.state.status === 'loading'" />
    <div v-else>
      Home
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
