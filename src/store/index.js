import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";
import sortModule from "./sortModule";

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

      const result = state.currentMovie.credits.cast.filter((cast) => {
        if (cast.profile_path !== null) {
          return cast;
        }
      });

      return result;
    },
    getPersonCast: (state) => {
      if (state.currentPerson === null) return null;

      const result = state.currentPerson.credits.cast.filter((cast) => {
        if (cast.poster_path !== null) {
          return cast;
        }
      });

      return result;
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
          text: state.currentPerson.gender === 1 ? "Female" : "Male",
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
    setPage: (state, page) => {
      state.content.page = page;
    },
    addMoreMovies: (state, movies) => {
      state.content.results = [...state.content.results, ...movies];
    },
    setCurrentMovie: (state, movie) => {
      state.currentMovie = movie;
    },
    setCurrentPerson: (state, person) => {
      state.currentPerson = person;
    },
  },
  actions: {
    getMovies: async ({ state, commit }, type) => {
      try {
        commit("setStatus", "loading");
        let response;

        if (state.sort.searchValue === "") {
          response = await api.get(`/movie/${type}`);
        }

        commit("setContentState", response.data);
        commit("setStatus", "fullfilled");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    loadMore: async ({ state, commit }, type) => {
      try {
        commit("setPage", state.content.page + 1);

        const response = await api.get(`/movie/${type}`, {
          params: {
            page: state.content.page,
            language: "en-US",
          },
        });

        commit("addMoreMovies", response.data.results);
        commit("setStatus", "fullfilled");
      } catch (e) {
        commit("setStatus", "error");
        console.log(e);
        commit("setErrorMessage", e);
      }
    },
    getSingleMovie: async ({ commit }, id) => {
      try {
        commit("setStatus", "loading");

        const response = await api.get(`/movie/${id}`, {
          params: {
            append_to_response: "credits,videos",
          },
        });

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
    sort: sortModule,
  },
});
