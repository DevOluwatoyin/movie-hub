import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const api = "d136620e549328df16c17b42f8f1d486";

  const fetchTrendingMovies = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
        // console.log(data.results.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="bg-bg-color mx-auto pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Trending Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
