import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgb(0,0,0,.4),rgb(0,0,0,.7),rgb(0,0,0,.8)),
        url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] flex flex-col items-start justify-end p-4 sm:p-8 lg:p-[5%]"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        {data.name || data.title || data.original_title || data.original_name}
      </h1>
      <p className="text-white text-[12px] sm:text-[14px] lg:text-[16px] w-[90%] sm:w-[70%] lg:w-[60%] mb-3 sm:mb-4 lg:mb-5 mt-2 sm:mt-3 lg:mt-4">
        {data.overview.slice(0, 200)} . . .{" "}
        <Link
          to={`/${data.media_type || title}/details/${data.id}`}
          className="text-blue-700 font-bold"
        >
          more
        </Link>
      </p>
      <p className="text-white text-[12px] sm:text-[14px] lg:text-[15px]">
        <i className="text-[#6556CD] text-[16px] sm:text-[18px] lg:text-[20px] ri-calendar-2-fill"></i>{" "}
        {data.release_date || "No Information"}
      </p>
      <p className="text-white text-[12px] sm:text-[14px] lg:text-[15px]">
        <i className="text-[#6556CD] text-[16px] sm:text-[18px] lg:text-[20px] ri-clapperboard-line"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type || title}/details/${data.id}`}
        className="mt-2 sm:mt-3 lg:mt-4 rounded-lg shadow-lg p-2 sm:p-3 lg:p-4 text-white font-semibold bg-[#6556CD] hover:bg-[#5545BC] transition-colors"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
