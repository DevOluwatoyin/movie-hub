import { MovieList } from "../components/MovieList";

export const movieListing = [
  {
    title: "What's Trending",
    path: "/trending",
    component:<MovieList />,
  },
  {
    title: "Popular",
    path: "/popular",
    component:"popular",
  },
  {
    title: "Trending",
    path: "/series",
    component:"series",
  }
];
