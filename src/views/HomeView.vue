<template>
  <div class="home"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
/*
onMounted(() => {
  store.dispatch("getPopularMovies");
});
*/
</script>
