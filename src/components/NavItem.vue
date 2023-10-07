<template>
  <li class="item nav__item">
    {{ props.title }}

    <ul class="item__list">
      <router-link
        v-for="link in list"
        :to="link.to"
        :key="link.title"
        class="item__link nav__item"
        >{{ link.title }}</router-link
      >
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  list: Array,
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;

  &:hover {
    .item__list {
      opacity: 1;
      visibility: visible;
    }
  }

  &__list {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    list-style: none;
    border-radius: 8px;
    background: #303b42;
    width: 180px;
    top: 30px;
    right: 50%;
    transform: translateX(50%);
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
  }

  &__link {
    display: block;
    height: 35px;
    padding: 10px 15px;

    &:hover {
      background: #3cbec9;
    }
  }
}
</style>
