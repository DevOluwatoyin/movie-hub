import { Link } from "react-router-dom";
// import { MovieList1, MovieList2, MovieList3 } from "../components/MovieList";
// import SearchBox from "../components/SearchBox";


const Home = () => {
  return (
    <div className="pt-12">
      <div className="hero relative w-full h-[40vh]">
        <span className="absolute top-0 left-0 w-full bg-bg-transparent1"></span>
        <div className="relative w-full">
          <div className="w-full text-center font-bold space-y-3 md:pt-8">
            <h1 className="text-3xl md:text-7xl pt-8 md:pt-0">Welcome!</h1>
            <p className="text-xl md:text-4xl max-w-4xl mx-auto">
              Discover and explore recent and trending Movies & TV Shows
            </p>
            Search
            {/* <SearchBox /> */}
          </div>
        </div>
      </div>
      <div className="px-4 w-full h-full bg-bg-color pt-14 pb-4">
        <div className="trending max-w-4xl mx-auto">
          <div className="flex justify-between space-x-4 items-center mb-8">
            <div className="relative">
              <h2 className="relative text-2xl font-bold pb-1">
                What&apos;s Trending
              </h2>
              <span className="line absolute w-full h-0.5 bottom-0"></span>
            </div>
            <Link to="/trending">
              <button className="bg-heart-color px-4 rounded-full">
                View all
              </button>
            </Link>
          </div>
          Trending
        </div>
        <div className="popular max-w-4xl mx-auto mt-8">
          <div className="flex justify-between space-x-4 items-center mb-8">
            <div className="relative">
              <h2 className="relative text-2xl font-bold pb-1">
                Popular Movies
              </h2>
              <span className="line absolute w-full h-0.5 bottom-0"></span>
            </div>
            <Link to="/popular">
              <button className="bg-heart-color px-4 rounded-full">
                View all
              </button>
            </Link>
          </div>
          Popular Movies
        </div>
        <div className="series max-w-4xl mx-auto mt-8">
          <div className="flex justify-between space-x-4 items-center mb-8">
            <div className="relative">
              <h2 className="relative text-2xl font-bold pb-1">
                Popular Series
              </h2>
              <span className="line absolute w-full h-0.5 bottom-0"></span>
            </div>
            <Link to="/series">
              <button className="bg-heart-color px-4 rounded-full">
                View all
              </button>
            </Link>
          </div>
          Popular Series
        </div>
      </div>
    </div>
  );
};

export default Home;
