import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import Loading from "./Loading";
import HorizontalCard from "./../utils/HorizontalCard";
import Dropdown from "../components/templates/Dropdown";

const Peopledetails = () => {
  const [category, setcategory] = useState("movie");
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="w-screen h-screen overflow-x-hidden">
      <nav className="w-full h-[10vh] fixed text-zinc-100 p-4 flex items-center bg-[#111111] gap-4 sm:gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-2xl sm:text-3xl ri-arrow-left-line"
        />
      </nav>
      <div className="w-full bg-[#1F1E24] flex flex-col lg:flex-row p-4 sm:p-[3%] mt-[10vh]">
        {/* Left Image and Detail */}
        <div className="w-full lg:w-[20%] h-full flex flex-col">
          <img
            className=" ml-5 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[80%] h-auto sm:h-[30vh] lg:h-[20vw] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt="Person"
          />
      <h1 className="font-bold text-center block md:hidden text-3xl mt-5 lg:text-4xl text-zinc-300">{info.detail.name}</h1>
      <h1 className="text-zinc-300 mt-5 block md:hidden font-bold text-xl">Biography</h1>
     
      <h1 className="font-semibold block md:hidden text-lg mt-2 text-zinc-400">
              {info.detail.biography}
            </h1>  
       <hr className ="mt-10 mb-5" />   
          <div className="text-xl text-zinc-200 px-4 flex gap-5">
            {info.externalid.facebook_id && (
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="hover:text-[#6556cd] text-3xl ri-facebook-circle-fill" />
              </a>
            )}
            {info.externalid.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              >
                <i className="hover:text-[#6556cd] text-3xl ri-instagram-fill" />
              </a>
            )}
            {info.externalid.twitter_id && (
              <a
                target="_blank"
                href={`https://x.com/${info.externalid.twitter_id}`}
              >
                <i className="hover:text-[#6556cd] text-3xl ri-twitter-x-fill" />
              </a>
            )}
            {info.externalid.wikidata_id && (
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              >
                <i className="hover:text-[#6556cd] text-3xl ri-earth-fill" />
              </a>
            )}
          </div>
          <div className="mt-5 lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-semibold text-white mb-5">
              Person information
            </h1>
            <div className="text-lg lg:text-xl">
              <h4 className="font-semibold text-zinc-100 mt-2">Known For</h4>
              <h5 className="font-semibold text-zinc-300">
                {info.detail.known_for_department}
              </h5>
              <h4 className="font-semibold text-zinc-100 mt-2">Gender</h4>
              <h5 className="text-zinc-300 font-semibold">
                {info.detail.gender === 2 ? "Male" : "Female"}
              </h5>
              <h4 className="font-semibold text-zinc-100 mt-2">Birthday</h4>
              <h5 className="text-zinc-300 font-semibold">
                {info.detail.birthday}{" "}
                <span>
                  (
                  {new Date().getFullYear() -
                    new Date(info.detail.birthday).getFullYear()}
                  years old)
                </span>
              </h5>
              <h4 className="font-semibold text-zinc-100 mt-2">Deathday</h4>
              <h5 className="text-zinc-300 font-semibold">
                {info.detail.deathday ? info.detail.deathday : "Still Alive"}
              </h5>
              <h4 className="font-semibold text-zinc-100 mt-2">Place Of Birth</h4>
              <h5 className="text-zinc-300 font-semibold">
                {info.detail.place_of_birth}
              </h5>
              <h4 className="font-semibold text-zinc-100 mt-2">
                Also Known As
              </h4>
              <h5 className="list-disc text-zinc-300 font-semibold"> {info.detail.also_known_as.map((g, i)=> (
  <li key={i}>{g}</li>
              ))}
              
              </h5>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="px-5 py-5 w-full lg:w-[80%]">
          <div className="mb-10">
            <h1 className="font-bold text-3xl hidden lg:block lg:text-4xl text-zinc-300 mb-5">
              {info.detail.name}
            </h1>
            <h1 className="text-zinc-300 hidden lg:block font-bold text-xl">Biography</h1>
            <h1 className="font-semibold hidden lg:block text-lg mt-2 text-zinc-400">
              {info.detail.biography}
            </h1>
          </div>
          <HorizontalCard data={info.combinedCredits.cast} />

          <div className="mt-10 mb-10 w-full flex  justify-between">
            <h1 className="text-zinc-300 mb-5 font-bold text-xl">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-300 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[50vh] shadow-2xl shadow-zinc-400 overflow-x-hidden overflow-y-auto border-2 border-zinc-500 rounded-lg p-2 sm:p-4 md:p-5">
          {info[category + "Credits"]?.cast?.length > 0 ? (
    info[category + "Credits"].cast.map((c, i) => (
    <li
      key={i}
      className="hover:text-white duration-300 cursor-pointer hover:bg-zinc-500 p-3 sm:p-4"
    >
      <Link to={`/${category}/details/${c.id}`}>
        <span className="font-bold text-base sm:text-lg">
          {category === "movie" ? "Movie Name: " : "TV Show Name: "}
        </span>
        <span className="font-semibold text-base sm:text-lg">
          {c.name || c.title || c.original_title || c.original_name}
        </span>
        <span className="block px-4 sm:px-5 font-semibold text-sm sm:text-lg">
          {c.character && `Character Name: ${c.character}`}
        </span>
      </Link>
    </li>
    ))
  ):(
    <p className="text-center text-zinc-400">No cast information available.</p>
  )}
</div>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
