import { api } from "@/api";

export default {
  state: {
    searchValue: "",
    activeSort: "popularity.desc",
    sortBy: [
      { title: "Populartity Descending", value: "popularity.desc" },
      { title: "Popularity Ascending", value: "popularity.asc" },
      { title: "Rating Descending", value: "vote_average.desc" },
      { title: "Rating Ascending", value: "vote_average.asc" },
      { title: "Release Date Descending", value: "primary_release_date.desc" },
      { title: "Release Date Ascending", value: "primary_release_date.asc" },
      { title: "Title (A-Z)", value: "title.asc" },
      { title: "Title (Z-A)", value: "title.desc" },
    ],
    genres: [],
  },
  getters: {},
  mutations: {
    setSearchValue: (state, value) => {
      state.searchValue = value;
    },
    setActiveSort: (state, value) => {
      state.activeSort = value;
    },
    setGenres: (state, genres) => {
      state.genres = genres;
    },
    toggleGenreActive: (state, id) => {
      state.genres.forEach((genre) => {
        genre.id === Number(id)
          ? (genre.isActive = !genre.isActive)
          : (genre.isActive = genre.isActive);
      });
    },
  },
  actions: {
    getMovieGenres: async ({ commit }) => {
      try {
        const response = await api.get("genre/movie/list", {
          params: { language: "en" },
        });
        commit("setGenres", response.data.genres);
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    getTVGenres: async ({ commit }) => {
      try {
        const response = await api.get("genre/movie/list", {
          params: { language: "en" },
        });
        commit("setGenres", response.data.genres);
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
  },
};
