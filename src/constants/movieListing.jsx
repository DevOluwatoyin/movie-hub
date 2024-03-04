import { MovieList } from "../components/MovieList";

export const movieListing = [
  {
    title: "What's Trending",
    path: "/trending",
    component: (
      <MovieList fetchUrl="https://api.themoviedb.org/3/trending/all/day" />
    ),
  },
  {
    title: "Popular",
    path: "/popular",
    component: (
      <MovieList fetchUrl="https://api.themoviedb.org/3/movie/popular" />
    ),
  },
  {
    title: "Trending",
    path: "/series",
    component: <MovieList fetchUrl="https://api.themoviedb.org/3/tv/popular" />,
  },
];
