import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Series = () => {
  const [series, setSeries] = useState([]);
  const api = "d136620e549328df16c17b42f8f1d486";

  const fetchSeries = () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}`)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results.slice(0, 20));
        // console.log(data.results.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div className="bg-bg-color mx-auto pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Series Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5">
        {series.map((series) => (
          <MovieCard movie={series} key={series.id} />
        ))}
      </div>
    </div>
  );
};

export default Series;
