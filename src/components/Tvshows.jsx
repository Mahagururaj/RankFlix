import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";


const Tvshows = () => {
    const navigate = useNavigate();
    document.title = "RankFlix| Tvshow";
    const [category, setcategory] = useState("airing_today");
    const [tvshow, setTvshow] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
    const GetTvshow = async () => {
      try {
        const { data } = await axios.get(`tv/${category}?page=${page}`);
        // setTvshow(data.results);
        if (data.results.length > 0) {
          setTvshow((prevState) => [...prevState, ...data.results]);
          setPage(page + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log("Error", error.message);
      }
    };
    const referShHandler = () => {
      if (tvshow.length === 0) {
        GetTvshow();
      } else {
        setPage(1);
        setTvshow([]);
        GetTvshow();
      }
    };
  
    useEffect(() => {
      referShHandler();
    }, [category]);
    return tvshow.length > 0 ? (
      <div className="w-screen h-screen overflow-hidden">
        <div className="w-full flex justify-between items-center p-[2%]">
          <h1 className="text-xl lg:text-3xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-left-line"
            ></i>
            Tvshow
          </h1>
          <div className="flex items-center w-[80%]">
            <Topnav />
            <Dropdown
              title="Category"
              options={["popular","on_the_air", "top_rated","airing_today"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
        </div>
        <div
        id="scrollableDiv"
        className="h-[calc(100vh-80px)] overflow-y-auto"
      > 
        <InfiniteScroll
          dataLength={tvshow.length}
          next={GetTvshow}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          <Cards data={tvshow} title="tv" />
        </InfiniteScroll>
        </div>
      </div>
    ) : (
      <Loading />
    );
  };
export default Tvshows
