import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";

export default createStore({
  state: {
    content: {},
    status: "loading",
    errorMessage: null,
  },
  getters: {},
  mutations: {
    setStatus: (state, status) => {
      state.status = status;
    },
    setErrorMessage: (state, errorMessage) => {
      state.errorMessage = errorMessage;
    },
    setContentState: (state, data) => {
      state.content = data;
    },
  },
  actions: {
    getPopularMovies: async ({ commit }) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        );
        commit("setContentState", response.data);
        commit("setStatus", "fullfilled");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
  },
  modules: {
    navRoutes: navRoutesModule,
  },
});
