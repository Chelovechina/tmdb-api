import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";

export default createStore({
  state: {
    currentMovie: null,
    content: {},
    status: "loading",
    errorMessage: null,
  },
  getters: {
    getAsideInfo: (state) => {
      if (state.currentMovie === null) {
        return null;
      }

      const currency = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return [
        {
          title: "Original Title",
          text: state.currentMovie.original_title,
        },
        {
          title: "Status",
          text: state.currentMovie.status,
        },
        {
          title: "Budget",
          text: currency.format(state.currentMovie.budget),
        },
        {
          title: "Revenue",
          text: currency.format(state.currentMovie.revenue),
        },
      ];
    },
  },
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
    setCurrentMovie: (state, movie) => {
      state.currentMovie = movie;
    },
  },
  actions: {
    getPopularMovies: async ({ commit }) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get("/movie/popular?language=en-US&page=1");
        commit("setContentState", response.data);
        commit("setStatus", "fullfilled");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    getSingleMovie: async ({ commit }, id) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get(
          `/movie/${id}?append_to_response=credits,videos&language=en-US`
        );
        commit("setCurrentMovie", response.data);
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
