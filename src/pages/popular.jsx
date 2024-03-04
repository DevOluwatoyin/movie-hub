import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const api = "d136620e549328df16c17b42f8f1d486";

  const fetchPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
        // console.log(data.results.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div className="bg-bg-color mx-auto pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Popular Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="text-center py-2">
              <p className="md:text-xl">{movie.title}</p>
              {movie.release_date && <p>{movie.release_date}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
