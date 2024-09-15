import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  document.title = "RankFlix | Trending";
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const referShHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    referShHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full flex justify-between items-center p-[2%]">
        <h1 className="text-xl lg:text-3xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-full">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[5%]"></div>
          <Dropdown
            title="Duration"
            options={["week","day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <div
        id="scrollableDiv"
        className="h-[calc(100vh-80px)] overflow-y-auto"
      > 
        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv" // Ensures InfiniteScroll is attached to the correct container
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
