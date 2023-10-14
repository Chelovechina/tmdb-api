<template>
  <LoaderComponent v-if="store.state.status === 'loading'" />
  <div v-else>
    <div class="container banner__wrapper">
      <ItemPoster :image-url="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
        store.state.currentPerson.profile_path
        " />
      <PersonInfo :title="store.state.currentPerson.name" :text="store.state.currentPerson.biography" />
    </div>
    <div class="container wrapper">
      <AsideInfo :aside-info="store.getters.getPersonAside" />
      <CastComponent title="Known For" type="person" :casts="store.getters.getPersonCast" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoaderComponent from "./../components/LoaderComponent.vue";
import ItemPoster from "./../components/UI/ItemPoster.vue";
import PersonInfo from "./../components/PersonInfo.vue";
import AsideInfo from "./../components/AsideInfo.vue";
import CastComponent from "../components/CastComponent.vue";

const store = useStore();
const route = useRoute();

onBeforeMount(() => {
  store.dispatch("getPerson", route.params.id);
});
</script>

<style lang="scss" scoped>
.banner__wrapper {
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
