<template>
  <footer class="footer">
    <router-link to="/">
      <img src="./../assets/footer-logo.svg" alt="logo" class="footer__logo" />
    </router-link>
    <p class="footer__text">
      The web application was developed during an internship at Digitastic,
      focusing on utilizing Vue, Vuex, HTML, and CSS to achieve its objectives.
    </p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  padding: 30px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  background: #0d253f;

  &__logo {
    width: 185.04px;
    height: 133.4px;
  }

  &__text {
    width: 280px;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
}
</style>
