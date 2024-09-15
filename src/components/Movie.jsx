import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate();
  document.title = "RankFlix | Movie";
  const [category, setcategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      // setmovie(data.results);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  const referShHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    referShHandler();
  }, [category]);
  return movie.length > 0 ? (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-[15%] flex justify-between items-center p-[2%]">
      <div className=" flex justify-between items-center gap-5  text-zinc-400 font-semibold  ">
      <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-xl lg:text-3xl  ri-arrow-left-line"
          ></i>
        <h1 className="text-xl lg:text-3xl">
          Movies
        </h1>
      </div>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular","top_rated", "upcoming","now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <div
        id="scrollableDiv"
        className="h-[calc(100vh-80px)] overflow-y-auto"
      > 
      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
