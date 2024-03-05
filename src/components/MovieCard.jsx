import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, pagePath }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isClicked = localStorage.getItem(`movie_${movie.id}_clicked`);
    if (isClicked) {
      setClicked(true);
    }
  }, [movie.id]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setClicked(!clicked);
    localStorage.setItem(`movie_${movie.id}_clicked`, !clicked);
  };

  const options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <Link
      to={`/${pagePath}/${movie.id}`}
      className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={clicked ? "rgb(86, 42, 90)" : "white"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart favourite absolute right-5 top-5 z-10"
        color="purple"
        onClick={handleClick}
      >
        <g>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </g>
      </svg>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="pl-2 py-2">
        <p>{movie.title || movie.original_name}</p>
        {movie.release_date && (
          <p>
            {new Date(movie.release_date).toLocaleDateString("en-gb", options)}
          </p>
        )}
        {movie.first_air_date && (
          <p>
            {new Date(movie.first_air_date).toLocaleDateString(
              "en-gb",
              options
            )}
          </p>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
