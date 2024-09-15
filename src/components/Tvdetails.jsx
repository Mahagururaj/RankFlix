import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loading from "./Loading";
import HorizontalCard from "./../utils/HorizontalCard";
import NoImg from "/no-image.jpg"


const Tvdetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

 return info ? (

    <div
      style={{
        background: `linear-gradient(rgb(0,0,0,.8),rgb(0,0,0,.8),rgb(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen relative  overflow-hidden overflow-y-auto"
    >
       <nav className="w-full h-[10vh] fixed text-zinc-100 p-[3%] flex items-center bg-[#111111]  gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-3xl ri-arrow-left-line"
        />
        <a target="-blank" href={info.detail.homepage}>
          <i className="hover:text-[#6556cd] text-3xl ri-external-link-fill" />
        </a>
        <a
          target="-blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-[#6556cd] text-3xl ri-earth-fill" />
        </a>
        <a
          target="-blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          className="hover:text-[#6556cd] border-2 p-1 font-semibold rounded-lg"
        >
          IMDb
        </a>
      </nav>
      
     <div className="p-[5%]">
      <div className="w-full mt-5
       flex flex-col lg:flex-row gap-4 ">
        <div className="lg:w-[30%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[30vh] sm:h-[40vh] lg:h-[50vh] mt-10 object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.backdrop_path || info.detail.poster_path
            }`}
            alt={info.detail.title || info.detail.name || "tv Poster"}
          />

          <div className="mt-5 flex flex-col">
            {info.watchproviders?.flatrate?.length > 0 && (
              <div className="flex gap-5 flex-wrap items-center">
                <h1 className="text-zinc-200 mb-4">Available On Platforms</h1>
                {info.watchproviders.flatrate.map((w) => (
                  <img
                    title={w.provider_name}
                    key={w.provider_id}
                    className="w-[8vh] sm:w-[5vh] lg:w-[5vh] object-cover rounded-lg mb-2"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt={w.provider_name}
                  />
                ))}
              </div>
            )}

            {info.watchproviders?.rent?.length > 0 && (
              <div className="flex gap-5 flex-wrap items-center">
                <h1 className="text-zinc-200 mb-4">Available On Rent</h1>
                {info.watchproviders.rent.map((w) => (
                  <img
                    title={w.provider_name}
                    key={w.provider_id}
                    className="w-[8vh] sm:w-[5vh] lg:w-[5vh] object-cover rounded-lg mb-2"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt={w.provider_name}
                  />
                ))}
              </div>
            )}

            {info.watchproviders?.buy?.length > 0 && (
              <div className="flex flex-wrap gap-5 items-center">
                <h1 className="text-zinc-200 mb-4">Available On Buy</h1>
                {info.watchproviders.buy.map((w) => (
                  <img
                    title={w.provider_name}
                    key={w.provider_id}
                    className="w-[8vh] sm:w-[5vh] lg:w-[5vh] object-cover rounded-lg mb-2"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt={w.provider_name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="content mt-[2%] px-4 sm:px-6 md:px-8 lg:px-[4%] w-full lg:w-[75%] mb-[2%]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-200">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_title ||
              info.detail.original_name}
            <small className="text-xl sm:text-2xl ml-1">
              ({new Date(info.detail.first_air_date).getFullYear()})
            </small>
          </h1>
          <div className="flex flex-col sm:flex-row text-white items-start sm:items-center gap-y-2 sm:gap-x-5 mb-2">
            <h1 className="text-base sm:text-lg lg:text-xl">
              {info.detail.first_air_date}
            </h1>
            <h1 className="text-base sm:text-lg lg:text-xl">
              {info.detail.genres.map((g) => g.name).join(" | ")}
            </h1>
            <h1 className="text-base sm:text-lg lg:text-xl">
              {Math.floor(info.detail.episode_run_time / 60)}h {info.detail.episode_run_time % 60}
              min
            </h1>
          </div>
          <div className="flex items-center gap-4 mb-4">
            {info.detail.vote_average && (
              <span className="rounded-full bg-[#ea8602] w-[6vh] sm:w-[7vh] h-[6vh] sm:h-[7vh] flex items-center justify-center text-lg sm:text-xl font-bold text-zinc-100">
                {(info.detail.vote_average * 10).toFixed()} <sub>%</sub>
              </span>
            )}
            <h1 className="text-base sm:text-xl lg:text-2xl text-white font-bold leading-6">
              User Score
            </h1>
            <Link
              to={`${pathname}/trailer`}
              className="hover:bg-[#4d40a4cc] hover:text-zinc-300 duration-5 p-2 sm:p-[2vh] font-semibold text-zinc-100 rounded-lg shadow-lg bg-[#6556CD] text-sm sm:text-base lg:text-lg"
            >
              <i className="mr-2 ri-play-large-fill"></i>Play Trailer
            </Link>
          </div>
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
              Overview
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-zinc-400 font-semibold w-full sm:w-[75vw] lg:w-[50vw]">
              {info.detail.overview}
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
              Tv Translations
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-zinc-400 font-semibold w-full sm:w-[75vw] lg:w-[50vw]">
              {info.translations.join(" | ")}
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <h1 className="text-2xl font-semibold text-white mb-5">Seasons</h1>
      <div className="w-full px-4 mb-5 overflow-y-hidden flex">
      {info.detail.seasons.map((s, i) =>(
        <div key={i} className="  min-w-[45%] md:min-w-[30%] lg:min-w-[15%] h-[40vh] m-2 bg-zinc-900 rounded-lg">
        <img
       
              className="w-full h-[70%] object-cover mb-2 rounded-lg shadow-lg"
              src={
                 s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                   s.poster_path
                    }`
                  : NoImg
              }
              alt=""
            />
           <h1 className="mb-2 text-white text-center text-[14px] font-semibold">{info.detail.name}</h1>
            <h1  className="mb-2 text-white text-center text-[14px] font-semibold">
              {s.name || s.title }
            </h1>

        </div>
      ))}
      
      </div>
      <hr className="mb-5" />
      <h1 className="text-2xl font-semibold text-white mb-5">Recommendations</h1>
      <HorizontalCard data = {info.recommendations.length > 0 ? info.recommendations : info.similar }/>
      <Outlet/>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default Tvdetails
