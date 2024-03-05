import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const fetchTrendingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
      });
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="bg-bg-color pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Trending Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5 md:max-w-6xl md:mx-auto">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} pagePath="movie" />
        ))}
      </div>
    </div>
  );
};

export default Trending;
