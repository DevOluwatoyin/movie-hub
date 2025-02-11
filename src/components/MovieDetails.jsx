/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieDetails = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  tagline,
  overview,
  genres,
  runtime,
  percentage,
}) => {
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
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className=" w-[350px] md:max-w-1/3"
            />
          </div>
          <div className="relative mx-5 md:w-1/2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="italic">{release_date}</p>
            <p className="italic">{tagline}</p>
            <div className="my-4 space-y-5">
              <h3 className="text-xl font-bold">Overview</h3>
              <p>{overview}</p>
              <div className="flex items-center gap-4">
                <p className="font-bold">Genres:</p>
                <div className="flex items-center gap-4">
                  {genres.map((each) => (
                    <p key={each.id}>{each.name}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p>
                  <strong className="inline-block mr-2">Runtime:</strong>
                  {runtime} mins
                </p>

                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={percentage * 10}
                    text={`${(percentage * 10).toFixed(2)}%`}
                    styles={buildStyles({
                      rotation: 1,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(255, 41, 1, ${(percentage * 10) / 100})`,
                      textColor: "rgb(255, 41, 1)",
                      trailColor: "white",
                      backgroundColor: "rgb(255, 41, 1)",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
