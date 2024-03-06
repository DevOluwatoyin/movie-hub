import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import Loader from "../components/Loader";

const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return res.json();
      })
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) {
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
    return (
      <div className="grid place-items-center h-screen">
        <div>Error: {error}</div>
      </div>
    );
  }

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    genres,
    runtime,
    tagline,
    vote_average,
  } = movieDetails;

  return (
    <MovieDetails
      backdrop_path={backdrop_path}
      poster_path={poster_path}
      title={title}
      release_date={release_date}
      tagline={tagline}
      overview={overview}
      genres={genres}
      runtime={runtime}
      percentage={vote_average}
    />
  );
};

export default Movie;
