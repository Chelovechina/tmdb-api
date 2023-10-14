<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />

  <div v-else>
    <div
      class="banner"
      :style="{
        backgroundImage:
          'url(' + url + store.state.currentTV.backdrop_path + ')',
      }"
    >
      <div class="container banner__wrapper">
        <ItemPoster
          :image-url="
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
            store.state.currentTV.poster_path
          "
        />
        <TVInfo :item="store.state.currentTV" />
      </div>
    </div>
    <div class="container wrapper">
      <AsideInfo :aside-info="store.getters.getTVAside" />
      <CastComponent
        title="Top Billed Cast"
        type="tv"
        :casts="store.getters.getTVCast"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import ItemPoster from "../components/UI/ItemPoster.vue";
import AsideInfo from "../components/AsideInfo.vue";
import CastComponent from "../components/CastComponent.vue";
import TVInfo from "../components/TVInfo.vue";

const store = useStore();
const route = useRoute();

const url = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

onBeforeMount(() => {
  store.dispatch("getSingle", { type: "tv", id: route.params.id });
});
</script>

<style lang="scss" scoped>
.banner {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
}

.banner__wrapper {
  position: relative;
  z-index: 5;
  display: flex;
  gap: 30px;
  padding: 50px;
  align-items: center;
}

.wrapper {
  display: flex;
  padding: 40px 0;
  gap: 40px;
}
</style>
