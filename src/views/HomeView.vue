<template>
  <div class="container">
    <LoaderComponent v-if="store.state.status === 'loading'" />
    <div v-else class="home">
      <h1 class="home__title title">Top rated Movies</h1>
      <SliderComponent />
      <h2 class="home__subtitle title">Tv shows</h2>
      <ul class="home__list">
        <router-link to="/tv/now-playing" class="playing home__item">
          Now Playing
        </router-link>
        <router-link to="/tv/upcoming" class="upcoming home__item">
          Upcoming
        </router-link>
        <router-link to="/tv/airing-today" class="popular home__item">
          Popular
        </router-link>
        <router-link to="/tv/top-rated" class="top-rated home__item">
          Top Rated
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import LoaderComponent from "./../components/LoaderComponent.vue";
import SliderComponent from "./../components/SliderComponent.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getPopularMovies");
});
</script>

<style lang="scss" scoped>
.home {
  padding: 40px 0;

  &__title {
    margin-bottom: 25px;
  }

  &__subtitle {
    margin: 30px 0;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 30px;
    width: 100%;
  }

  &__item {
    text-decoration: none;
    display: flex;
    height: 220px;
    padding: 97px 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }
}

.playing {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("./../assets/airing-today.jpg");
  background-size: cover;
}

.upcoming {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("./../assets/on-the-air.jpg");
  background-size: cover;
}

.popular {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("./../assets/popular.jpg");
  background-size: cover;
}

.top-rated {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("./../assets/top-rated.jpg");
  background-size: cover;
}
</style>
