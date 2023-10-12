<template>
  <div class="progress">
    <div class="progress__inner" :style="{ width: width * 10 + '%' }"></div>
  </div>
</template>

<script setup>
const { width } = defineProps({ width: Number });
</script>

<style lang="scss" scoped>
.progress {
  height: 2px;
  background: #242e34;

  &__inner {
    height: 100%;
    background: #3cbec9;
  }
}
</style>
