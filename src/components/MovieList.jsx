import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ fetchUrl, pagePath }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(`${fetchUrl}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="cards grid grid-cols-[1fr] justify-center gap-5">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} pagePath={pagePath} />
      ))}
    </div>
  );
};
