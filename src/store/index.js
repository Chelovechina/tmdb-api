import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";

export default createStore({
  state: {
    currentMovie: null,
    currentPerson: null,
    content: {},
    status: "loading",
    errorMessage: null,
  },
  getters: {
    getMovieCast: (state) => {
      if (state.currentMovie === null) return null;

      return state.currentMovie.credits.cast.slice(0, 8);
    },
    getPersonCast: (state) => {
      if (state.currentPerson === null) return null;

      return state.currentPerson.credits.cast.slice(0, 8);
    },
    getMovieAside: (state) => {
      if (state.currentMovie === null) return null;

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
    getPersonAside: (state) => {
      if (state.currentPerson === null) return null;

      return [
        {
          title: "Known For",
          text: state.currentPerson.known_for_department,
        },
        {
          title: "Gender",
          text: state.currentPerson.gender,
        },
        {
          title: "Birthday",
          text: state.currentPerson.birthday,
        },
        {
          title: "Plase Of Birth",
          text: state.currentPerson.place_of_birth,
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
    setCurrentPerson: (state, person) => {
      state.currentPerson = person;
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
    getPerson: async ({ commit }, id) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get(
          `/person/${id}?append_to_response=credits&language=en-US`
        );
        commit("setCurrentPerson", response.data);
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
