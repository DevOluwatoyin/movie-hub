import React from 'react'
import { Link } from 'react-router-dom';

const Listing = ({list}) => {
  return (
    <div className="trending max-w-4xl mx-auto">
      <div className="flex justify-between space-x-4 items-center mb-8">
        <div className="relative">
          <h2 className="relative text-2xl font-bold pb-1">
            {list.title}
          </h2>
          <span className="line absolute w-full h-0.5 bottom-0"></span>
        </div>
        <Link to={list.path}>
          <button className="bg-heart-color px-4 rounded-full">View all</button>
        </Link>
      </div>
      {list.component}
    </div>
  );
}

export default Listing