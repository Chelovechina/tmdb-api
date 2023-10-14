import { createStore } from "vuex";
import { api } from "@/api";
import navRoutesModule from "./navRoutesModule";
import sortModule from "./sortModule";

export default createStore({
  state: {
    currentMovie: null,
    currentTV: null,
    currentPerson: null,
    content: {},
    status: "loading",
    errorMessage: null,
  },
  getters: {
    getTVCast: (state) => {
      if (state.currentTV === null) return null;

      const result = state.currentTV.credits.cast.filter((cast) => {
        if (cast.profile_path !== null) {
          return cast;
        }
      });

      return result;
    },
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
    getTVAside: (state) => {
      if (state.currentTV === null) return null;

      return [
        {
          title: "Original Name",
          text: state.currentTV.original_name,
        },
        {
          title: "Status",
          text: state.currentTV.status,
        },
        {
          title: "Last Air Date",
          text: state.currentTV.last_air_date,
        },
        {
          title: "Number Of Episodes",
          text: state.currentTV.number_of_episodes,
        },
      ];
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
    setCurrentTV: (state, tv) => {
      state.currentTV = tv;
    },
    setCurrentPerson: (state, person) => {
      state.currentPerson = person;
    },
  },
  actions: {
    getList: async ({ commit }, type) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get(type);
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

        const response = await api.get(type, {
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
    getSingle: async ({ commit }, { type, id }) => {
      try {
        commit("setStatus", "loading");

        const response = await api.get(`/${type}/${id}`, {
          params: {
            append_to_response: "credits,videos",
          },
        });

        type === "movie"
          ? commit("setCurrentMovie", response.data)
          : commit("setCurrentTV", response.data);
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
