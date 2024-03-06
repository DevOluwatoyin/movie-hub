import React from "react";

export const Loader = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-center">
        <div className="w-9 my-[10px] mx-auto h-9 border-[6px] border-white border-t-[#ff2901] animate-spin rounded-full"></div>
        <p>Loading... Please wait</p>
      </div>
    </div>
  );
};

export const Error = ({ error }) => {
  return <div>Error: {error}</div>;
};

export const ErrorPage = ({ error }) => {
  return (
    <div className="grid place-items-center h-screen">
      <div>Error: {error}</div>
    </div>
  );
};
