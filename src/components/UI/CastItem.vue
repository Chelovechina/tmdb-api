<template>
  <router-link
    :to="type === 'person' ? `/movies/${item.id}` : `/people/${item.id}`"
    class="cast__link"
  >
    <li class="cast__item item">
      <img
        :src="
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + item[imgSrc]
        "
        class="item__img"
      />
      <div class="item__info">
        <h5 class="item__title">{{ item.name }} {{ item.title }}</h5>
        <p class="item__text">{{ item.character }}</p>
      </div>
    </li>
  </router-link>
</template>

<script setup>
const { item, type } = defineProps({ item: Object, type: String });
const imgSrc = type === "person" ? "poster_path" : "profile_path";
</script>

<style lang="scss" scoped>
.cast__link {
  text-decoration: none;
}

.item {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #303b42;
    gap: 8px;
  }

  &__title {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  &__text {
    color: #fff;
    font-size: 12px;
  }
}
</style>
