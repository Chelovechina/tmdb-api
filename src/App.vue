<template>
  <HeaderComponent />
  <main class="main">
    <router-view> </router-view>
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #242e34;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  height: 100%;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
}

.nav__item {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 500;
}
</style>
