<template>
  <span v-for="genre in genres" :key="genre.id">{{ genre.name }}; </span>
</template>

<script setup>
const { genres } = defineProps({ genres: Array });
</script>

<style lang="scss" scoped></style>
