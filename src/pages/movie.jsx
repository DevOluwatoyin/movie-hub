import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const api = "d136620e549328df16c17b42f8f1d486";
const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

 const fetchMovie = (mediaType) => {
   let apiUrl = "";
   if (mediaType === "movie") {
     apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`;
   } else if (mediaType === "tv") {
     apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${api}`;
   }

   fetch(apiUrl)
     .then((res) => res.json())
     .then((data) => {
       setMovieDetails(data);
       console.log(data);
     });
 };

 useEffect(() => {
   // Determine media type based on the path
   const mediaType = window.location.pathname.includes("/movie/")
     ? "movie"
     : "tv";
   fetchMovie(mediaType);
 }, []);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { backdrop_path, title, release_date, overview, runtime, tagline } =
    movieDetails;

  return (
    <div className="pt-20 w-full md:h-screen bg-bg-transparent2">
      <div
        className="relative w-full h-full bg-cover flex items-center justify-center lg:px-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
        }}
      >
        <span className="absolute w-full h-full bg-bg-transparent2"></span>
        <div className="w-full mx-auto flex flex-col justify-between items-center md:max-w-7xl md:flex-row">
          <div className="relative mx-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={title}
              className=" w-[350px] md:max-w-1/3"
            />
          </div>
          <div className="relative mx-5 md:w-1/2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{release_date}</p>
            <p className="italic">{tagline}</p>
            <div className="my-4">
              <h3 className="text-xl font-bold">Overview</h3>
              <p>{overview}</p>
              <p>
                <strong>Runtime:</strong>
                {runtime} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
