<template>
  <div class="info">
    <div class="info__block block">
      <h1 class="info__title">{{ name }}</h1>
    </div>
    <div class="info__block">
      <h4 class="block__title">Biography:</h4>
      <p>{{ biography }}</p>
    </div>
  </div>
</template>

<script setup>
const { name, biography } = defineProps({
  name: String,
  biography: String,
});
</script>

<style lang="scss" scoped></style>
