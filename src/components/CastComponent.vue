<template>
  <div class="cast">
    <h3 class="cast__title">{{ title }}</h3>

    <ul class="cast__list">
      <router-link
        v-for="cast in casts"
        :key="cast.id"
        :to="type === 'person' ? `/movie/${cast.id}` : `/people/${cast.id}`"
        class="cast__link"
      >
        <li class="cast__item item">
          <img
            :src="
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' +
              cast[imgSrc]
            "
            class="item__img"
          />
          <div class="item__info">
            <h5 class="item__title">{{ cast.name }} {{ cast.title }}</h5>
            <p class="item__text">{{ cast.character }}</p>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
const { casts, type, title } = defineProps({
  casts: Array,
  title: String,
  type: String,
});

const imgSrc = type === "person" ? "poster_path" : "profile_path";
</script>

<style lang="scss">
.cast {
  color: #fff;
  width: 100%;

  &__title {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__link {
    text-decoration: none;
  }

  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
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
