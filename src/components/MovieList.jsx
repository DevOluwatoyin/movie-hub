import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const api = "d136620e549328df16c17b42f8f1d486";
export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api}`)
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
       <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
