import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import NoImg from "/no-image.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setsearches(data.results);
    
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [query]);

  return (
<div className="flex items-center w-full h-[10vh] px-[5%] relative">
  <>
    <i className="text-zinc-300 text-2xl md:text-3xl ri-search-line hidden md:block"></i>
    <input
      onChange={(e) => setquery(e.target.value)}
      value={query}
      className="w-[70%] md:w-[50%] text-white mx-4 p-2 md:p-3 rounded-lg md:rounded-xl text-lg md:text-xl outline-none border-none bg-transparent"
      type="text"
      placeholder="Search"
    />
  </>
  {query.length > 0 && (
    <i
      onClick={() => setquery("")}
      className="cursor-pointer text-zinc-300 text-2xl md:text-3xl ri-close-fill hidden md:block"
    ></i>
  )}
  
  {/* Search Suggestion Dropdown */}
  <div className="suggest z-[100] overflow-auto absolute w-[90%] md:w-[50%] max-h-[50vh] bg-[#F5F5F5] border-l-2 border-r-2 border-zinc-100 left-[5%] top-[100%] shadow-lg rounded-lg">
    {searches.map((s, i) => (
     
      <Link
        to={`/${s.media_type}/details/${s.id}`}
        key={i}
        className="justify-start font-semibold text-zinc-600 border-b-2 border-zinc-500 items-center cursor-pointer p-3 md:p-4 flex hover:text-black duration-300 hover:bg-zinc-500"
      >
        <img
          className="shadow-lg rounded mr-4 w-[8vh] h-[8vh] md:w-[10vh] md:h-[10vh] object-cover"
          src={
            s.backdrop_path || s.profile_path
              ? `https://image.tmdb.org/t/p/original/${
                  s.backdrop_path || s.profile_path
                }`
              : NoImg
          }
          alt="img"
        />
        
        <span>
          {s.title || s.original_title || s.title || s.original_name}
        </span>
      
      </Link>
      
    ))}
  </div>
</div>

  
  );
};

export default Topnav;
