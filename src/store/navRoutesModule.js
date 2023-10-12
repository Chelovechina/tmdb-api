export default {
  state: {
    movies: [
      { title: "Popular", to: "/movies/popular" },
      {
        title: "Now Playing",
        to: "/movies/now-playing",
      },
      {
        title: "Upcoming",
        to: "/movies/upcoming",
      },
      {
        title: "Top Rated",
        to: "/movies/top-rated",
      },
    ],
    tv: [
      { title: "Popular", to: "/tv/popular" },
      {
        title: "On The Air",
        to: "/tv/on-the-air",
      },
      {
        title: "Airing Today",
        to: "/tv/airing-today",
      },
      {
        title: "Top Rated",
        to: "/tv/top-rated",
      },
    ],
  },
};
