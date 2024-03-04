import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]"
    >
      <p>icon</p>
      {/* <HeartIcon className="absolute w-6 h-6 text-heart-outline right-0" /> */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="text-center py-2">
        <p className="md:text-xl">{movie.title}</p>
        {movie.release_date && <p>{movie.release_date}</p>}
      </div>
    </Link>
  );
};

export default MovieCard;
