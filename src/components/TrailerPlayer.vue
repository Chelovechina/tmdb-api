<template>
  <div v-if="isActive" @click="handleClick" class="wrapper">
    <iframe width="80%" height="80%" :src="videoUrl" class="player"> </iframe>
  </div>
</template>

<script setup>
const { isActive, videoUrl, handleClick } = defineProps({
  isActive: Boolean,
  videoUrl: String,
  handleClick: Function,
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player {
  position: relative;
  z-index: 100;
  border: none;
  border-radius: 10px;
  overflow: hidden;
}
</style>
