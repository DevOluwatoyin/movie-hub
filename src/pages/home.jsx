import SearchBar from "../components/SearchBar";
import Listing from "../components/Listing";
import { movieListing } from "../constants/movieListing";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query, results) => {
    setSearchQuery(query);
    setSearchResults(results);
  };
  return (
    <div className="pt-12">
      <div className="hero relative w-full h-[40vh]">
        <span className="absolute top-0 left-0 w-full bg-bg-transparent1"></span>
        <div className="relative w-full">
          <div className="w-full text-center space-y-3 md:pt-8">
            <h1 className="text-3xl font-bold pt-8 md:text-7xl md:pt-0">
              Welcome!
            </h1>
            <p className="text-xl max-w-4xl mx-auto font-bold md:text-4xl">
              Discover and explore recent and trending Movies & TV Shows
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="px-4 w-full h-full bg-bg-color pt-14 pb-4 space-y-8">
        {searchResults ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <h2 className="relative text-2xl font-bold pb-1">
                  Results for {`"${searchQuery}"`}
                </h2>
                <span className="line absolute w-full h-0.5 bottom-0 max-w-64"></span>
              </div>
            </div>
            <div className="cards grid grid-cols-[1fr] justify-center gap-5">
              {searchResults.map((result) => (
                <MovieCard movie={result} key={result.id} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {movieListing.map((list, index) => (
              <Listing list={list} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
