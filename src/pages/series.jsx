import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { ErrorPage, Loader } from "../components/Loader";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSeries = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results.slice(0, 20));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

   if (loading) {
     return <Loader />;
   }

   if (error) {
     return <ErrorPage error={error} />;
   }

  return (
    <div className="bg-bg-color pt-14 p-4">
      <h1 className="text-3xl font-bold py-4">Series Movies</h1>
      <div className="cards grid grid-cols-[1fr] justify-center gap-5 md:max-w-6xl md:mx-auto">
        {series.map((series) => (
          <MovieCard movie={series} key={series.id} pagePath="tv" />
        ))}
      </div>
    </div>
  );
};

export default Series;
