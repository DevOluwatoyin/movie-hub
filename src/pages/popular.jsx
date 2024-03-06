import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { ErrorPage, Loader } from "../components/Loader";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopularMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.results.slice(0, 20));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="bg-bg-color pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Popular Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5 md:max-w-6xl md:mx-auto">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} pagePath="movie" />
        ))}
      </div>
    </div>
  );
};

export default Popular;
