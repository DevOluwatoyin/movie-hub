import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const api = "d136620e549328df16c17b42f8f1d486";
const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        // console.log(data);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const percentage = 66;

  if (!movieDetails) {
    return <div>Loading...</div>;
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
    vote_average
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
