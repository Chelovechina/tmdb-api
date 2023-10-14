<template>
  <div class="info">
    <div class="info__block block">
      <h1 class="info__title">{{ title }}</h1>
    </div>

    <InfoBlock title="Biography" :text="text" />
  </div>
</template>

<script setup>
import InfoBlock from "./UI/InfoBlock.vue";

const { title, text } = defineProps({
  title: String,
  text: String,
});
</script>

<style lang="scss" scoped></style>
