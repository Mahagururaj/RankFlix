import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";


const People = () => {
   
  const navigate = useNavigate();
  document.title = "RankFlix | People";
  const [category, setcategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`person/${category}?page=${page}`);
      // setPeople(data.results);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  const referShHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    referShHandler();
  }, [category]);
  return people.length > 0 ? (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full flex justify-between items-center p-[2%]">
        <h1 className="text-3xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>
      <div
        id="scrollableDiv"
        className="h-[calc(100vh-80px)] overflow-y-auto"
      > 
      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};


export default People
