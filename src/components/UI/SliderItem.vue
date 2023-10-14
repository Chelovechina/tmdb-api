<template>
  <router-link :to="`/movies/${slide.id}`" class="slide__link">
    <div class="slide" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="slide__description">
        <h4 class="slide__title">{{ slide.title }}</h4>
        <p class="slide__overview">{{ slide.overview }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const { slide } = defineProps({
  slide: Object,
});

const imageUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${slide.backdrop_path}`;
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  border-radius: 10px;
  min-width: 900px;
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;

  &__link {
    text-decoration: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 3;
    border-radius: 10px;
  }

  &__description {
    position: relative;
    display: flex;
    gap: 20px;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    z-index: 4;
  }

  &__title {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
  }

  &__overview {
    color: #fff;
    font-size: 14px;
    width: 500px;
    font-weight: 400;
  }
}
</style>
