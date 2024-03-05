import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
        // console.log(data);
      });
  };

  useEffect(() => {
    // Determine media type based on the path
    const mediaType = window.location.pathname.includes("/movie/")
      ? "movie"
      : "tv";
    fetchMovie(mediaType);
  }, []);

  const percentage = 66;

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    backdrop_path,
    title,
    release_date,
    overview,
    genres,
    runtime,
    tagline,
  } = movieDetails;

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
              <div>
                <p>Genres:</p>
                <div className="flex items-center gap-4">
                  {genres.map((each) => (
                    <p key={each.id}>{each.name}</p>
                  ))}
                </div>
              </div>
              <p>
                <strong>Runtime:</strong>
                {runtime} min
              </p>
              {/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}

              <div className="w-20 h-20">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 10,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: "rgb(255, 41, 1)",
                    trailColor: " rgb(255, 41, 1)",
                    backgroundColor: "rgb(255, 41, 1)",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
