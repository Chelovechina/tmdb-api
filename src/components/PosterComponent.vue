<template>
  <div class="poster">
    <img :src="imageUrl" alt="Poster" class="poster__image" />
  </div>
</template>

<script setup>
const { imageUrl } = defineProps({
  imageUrl: String,
});
</script>

<style lang="scss" scoped>
.poster {
  width: 300px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
