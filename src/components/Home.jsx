import React, { useEffect, useState } from "react";
import Slidenav from "./templates/Slidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from './templates/Header';
import HorizontalCard from "../utils/HorizontalCard";
import Dropdown from "./templates/Dropdown"; 
import Loading from "../components/Loading";

const Home = () => {
  document.title = "RankFlix | Home";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    GetTrending();
     !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
     
      <div className="w-full h-full  overflow-x-hidden overflow-auto ">
      <div className="flex items-center justify-center px-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-bold flex items-center">
  <i className=" sm:text-3xl md:text-3xl lg:text-3xl text-[#5f4ae5] ri-vidicon-2-fill mr-3"></i>
  RankFlix
</h1>

        <Topnav />
        <Slidenav />
      </div>
       
        <Header data={wallpaper} />
        <div className="mb-5 px-3 py-4 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
        </div>
        <HorizontalCard data={trending} title={category} />
      </div>
   
    </>
  ) : (
    <Loading />
  );
};

export default Home;
