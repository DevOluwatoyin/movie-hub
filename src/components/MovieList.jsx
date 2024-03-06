import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

export const MovieList = ({ fetchUrl, pagePath }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    setIsLoading(true);
    fetch(`${fetchUrl}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies.");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.results.slice(0, 4));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <div className="text-center">
          <Loader />
          <p>Loading... Please wait</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cards grid grid-cols-[1fr] justify-center gap-5">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} pagePath={pagePath} />
      ))}
    </div>
  );
};
