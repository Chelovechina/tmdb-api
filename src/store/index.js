import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";

export default createStore({
  state: {
    content: {},
  },
  getters: {},
  mutations: {
    setContentState: (state, data) => {
      state.content = data;
    },
  },
  actions: {
    getPopularMovies: async ({ commit }) => {
      try {
        const response = await api.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        );
        commit("setContentState", response.data);
      } catch (e) { }
    },
  },
  modules: {
    navRoutes: navRoutesModule,
  },
});
