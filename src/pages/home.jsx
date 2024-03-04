import SearchBar from "../components/SearchBar";
// import { movieListing } from "../constants/movieListing";
import Listing from "../components/Listing";
import { movieListing } from "../constants/movieListing";

const Home = () => {
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
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="px-4 w-full h-full bg-bg-color pt-14 pb-4 space-y-8">
        {movieListing.map((list, index) => (
         <Listing list={list} key={index} />
       ))}
      </div>
    </div>
  );
};

export default Home;
