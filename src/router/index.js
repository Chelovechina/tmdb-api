import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutView from "../views/LayoutView.vue";
import OnTheAirTVVIew from "../views/OnTheAirTVView.vue";
import AiringTodayTVView from "../views/AiringTodayTVView.vue";
import PopularTVView from "../views/PopularTVView.vue";
import TopRatedTVView from "../views/TopRatedTVView.vue";
import PopularMovieView from "../views/PopularMovieView.vue";
import NowPlayingMovieView from "../views/NowPlayingMovieView.vue";
import UpcomingMovieView from "../views/UpcomingMovieView.vue";
import TopRatedMovieView from "../views/TopRatedMovieView.vue";
import PeopleView from "../views/PeopleView.vue";
import MovieView from "../views/MovieView.vue";
import TVView from "../views/TVView.vue";
import PersonView from "../views/PersonView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/people",
    name: "people",
    component: PeopleView,
  },
  {
    path: "/tv/on-the-air",
    name: "onTheAirTV",
    component: (
      <LayoutView title="On The Air TV Shows" type="tv">
        <OnTheAirTVVIew />
      </LayoutView>
    ),
  },
  {
    path: "/tv/airing-today",
    name: "airingTodayTV",
    component: (
      <LayoutView title="Airing Today TV Shows" type="tv">
        <AiringTodayTVView />
      </LayoutView>
    ),
  },
  {
    path: "/tv/popular",
    name: "popularTV",
    component: (
      <LayoutView title="Popular TV Shows" type="tv">
        <PopularTVView />
      </LayoutView>
    ),
  },
  {
    path: "/tv/top-rated",
    name: "topRatedTV",
    component: (
      <LayoutView title="Top Rated TV Shows" type="tv">
        <TopRatedTVView />
      </LayoutView>
    ),
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
    path: "/tv/:id",
    name: "tvShow",
    component: TVView,
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
