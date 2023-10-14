<template>
  <div class="info__block block">
    <h4 class="block__title">{{ title }}</h4>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
const { title, text } = defineProps({ title: String, text: String });
</script>

<style lang="scss" scoped></style>
