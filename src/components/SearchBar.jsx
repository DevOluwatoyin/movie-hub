import { useState } from "react";
import { Error } from "./Loader";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      onSearch(searchQuery, data.results);
    } catch (error) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mx-4" onSubmit={handleSubmit}>
      <div className="form-case max-w-3xl mx-auto grid grid-cols-[1fr] p-2 rounded-full place-content-center space-y-2 sm:grid-cols-[5fr_2fr] sm:space-y-0">
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleChange}
          className="w-full h-12 px-8 rounded-full text-black bg-white placeholder:text-black placeholder:text-lg outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-opacity-50 md:placeholder:text-2xl"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="btn w-full py-4 rounded-full text-center text-base md:text-2xl font-medium"
          disabled={loading}
        >
          {loading ? "please wait..." : "Show Me!"}
        </button>
      </div>
      {error && <Error error={error} />}
    </form>
  );
};

export default SearchBar;
