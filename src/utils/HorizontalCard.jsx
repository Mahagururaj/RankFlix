import React from "react";
import { Link } from "react-router-dom";
import NoImg from "/no-image.jpg";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full h-auto px-4 mb-5 overflow-y-hidden flex ">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type || 'title'}/details/${d.id}`}
            key={i}
            className="min-w-[35%] md:min-w-[30%] lg:min-w-[15%] h-[35vh] m-2 bg-zinc-900 rounded-lg"
          >
            <img
              className="h-[45%] object-cover mb-2 rounded-lg shadow-lg"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : NoImg
              }
              alt={d.name || d.title || "No Image Available"}
            />
            <h1 className="mb-2 text-white text-center text-[14px] font-semibold">
              {d.name || d.title || d.original_title || d.original_name}
            </h1>
            <div>
              <p className="text-[14px] block md:hidden text-zinc-200 px-2">
                {d.overview ? `${d.overview.slice(0, 20)}...` : "No overview"}
                <span className="text-zinc-400 font-bold"> more</span>
              </p>
              <p className="text-[14px] hidden lg:block text-zinc-200 px-2">
                {d.overview ? `${d.overview.slice(0, 80)}...` : "No overview"}
                <span className="text-zinc-400 font-bold"> more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 font-bold text-white text-center">
          Nothing To Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCard;
