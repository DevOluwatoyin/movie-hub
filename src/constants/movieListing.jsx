import { MovieList } from "../components/MovieList";

export const movieListing = [
  {
    title: "What's Trending",
    path: "/trending",
    component: (
      <MovieList
        fetchUrl="https://api.themoviedb.org/3/trending/all/day"
        pagePath="movie"
      />
    ),
  },
  {
    title: "Popular",
    path: "/popular",
    component: (
      <MovieList
        fetchUrl="https://api.themoviedb.org/3/movie/popular"
        pagePath="movie"
      />
    ),
  },
  {
    title: "Trending",
    path: "/series",
    component: (
      <MovieList
        fetchUrl="https://api.themoviedb.org/3/tv/popular"
        pagePath="tv"
      />
    ),
  },
];
