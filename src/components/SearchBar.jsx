import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length !== 0 && inputValue !== "") {
      setSearchQuery(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      onSearch(searchQuery, data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
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
        >
          Show Me!
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
