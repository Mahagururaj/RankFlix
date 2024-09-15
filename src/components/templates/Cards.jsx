import React from "react";
import { Link } from "react-router-dom";
import NoImg from "/no-image.jpg";

const Cards = ({ data, title }) => {
  
  return (
    <div className="p-[3%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full h-full bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full h-[40vh] object-cover"
            src={
              c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.poster_path || c.profile_path
                  }`
                : NoImg
            }
            alt=""
          />

          <h1 className="text-xl text-center mt-3 font-bold text-zinc-200">
            {c.name || c.title || c.original_title || c.original_name}
          </h1>
             {c.vote_average &&  <div className="rounded-full bg-[#6556CD] px-3 py-4 text-xl absolute right-0 top-0 transform translate-x-[20%] translate-y-[-20%] flex items-center justify-center text-zinc-300">
            {(c.vote_average * 10).toFixed()} <sub>%</sub>
          </div> }
         
        </Link>
      ))}
    </div>
  );
};

export default Cards;
