<template>
  <div class="wrapper">
    <button @click="prevSlide" class="btn">
      <img src="./../assets/arrow-left-solid.svg" alt="left" class="btn__img" />
    </button>
    <div class="slider__wrapper">
      <div
        class="slider"
        :style="{ marginLeft: '-' + 100 * currentSlideIndex + '%' }"
      >
        <SliderItem
          v-for="slide in sliderList"
          :key="slide.id"
          :slide="slide"
        />
      </div>
    </div>
    <button @click="nextSlide" class="btn">
      <img
        src="./../assets/arrow-right-solid.svg"
        alt="right"
        class="btn__img"
      />
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import SliderItem from "./UI/SliderItem.vue";
import { ref } from "vue";

const store = useStore();
const sliderList = store.state.content.results.slice(0, 5);

const currentSlideIndex = ref(0);

const nextSlide = () => {
  if (currentSlideIndex.value >= 4) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value++;
  }
};

const prevSlide = () => {
  if (currentSlideIndex.value <= 0) {
    currentSlideIndex.value = 4;
  } else {
    currentSlideIndex.value--;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.slider__wrapper {
  width: 900px;
  height: 380px;
  overflow: hidden;
}

.slider {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transition: margin-left 0.3s ease-in-out;
}

.btn {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #303b42;
  border: none;

  &__img {
    width: 20px;
    height: 20px;
  }
}
</style>
