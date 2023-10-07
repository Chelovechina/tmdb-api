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
        title: "Now Playing",
        to: "/tv/now-playing",
      },
      {
        title: "Upcoming",
        to: "/tv/upcoming",
      },
      {
        title: "Top Rated",
        to: "/tv/top-rated",
      },
    ],
  },
};
