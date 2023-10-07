<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav nav">
        <router-link to="/">
          <img src="./../assets/tmdb-logo.svg" alt="logo" class="nav__logo" />
        </router-link>
        <ul class="nav__list">
          <NavItem title="Movies" :list="store.state.navRoutes.movies" />
          <NavItem title="TV Shows" :list="store.state.navRoutes.tv" />
          <router-link to="/people" class="nav__item">People</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import NavItem from "./../components/NavItem.vue";
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss" scoped>
.header {
  background: #0d253f;
  padding: 0 20px;
  height: 60px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  &__logo {
    height: 20px;
  }

  &__list {
    list-style: none;
    display: flex;
    gap: 20px;
  }
}
</style>
