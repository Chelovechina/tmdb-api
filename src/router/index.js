import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutView from "../views/LayoutView.vue";
import PopularMovieView from "../views/PopularMovieView.vue";
import NowPlayingMovieView from "../views/NowPlayingMovieView.vue";
import UpcomingMovieView from "../views/UpcomingMovieView.vue";
import TopRatedMovieView from "../views/TopRatedMovieView.vue";
import MovieView from "../views/MovieView.vue";
import PersonView from "../views/PersonView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies/popular",
    name: "popularMovie",
    component: (
      <LayoutView title="Popular Movies" type="movie">
        <PopularMovieView />
      </LayoutView>
    ),
  },
  {
    path: "/movies/upcoming",
    name: "upcomingMovie",
    component: (
      <LayoutView title="Upcoming Movies" type="movie">
        <UpcomingMovieView />
      </LayoutView>
    ),
  },
  {
    path: "/movies/now-playing",
    name: "nowPlayingMovie",
    component: (
      <LayoutView title="Now Playing Movies" type="movie">
        <NowPlayingMovieView />
      </LayoutView>
    ),
  },
  {
    path: "/movies/top-rated",
    name: "topRatedMovie",
    component: (
      <LayoutView title="Top Rated Movies" type="movie">
        <TopRatedMovieView />
      </LayoutView>
    ),
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/people/:id",
    name: "person",
    component: PersonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
