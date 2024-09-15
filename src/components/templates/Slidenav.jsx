import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slidenav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button for all devices */}
      <div className="p-3 relative top-0 right-0">
        <button
          className="text-[#6556CD]  text-4xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={`ri-${isOpen ? "close" : "menu"}-line`}></i>
        </button>
      </div>

      {/* Side Navigation */}
      <div
        className={`p-10 w-[270px] h-full border-r-2 border-zinc-500 bg-zinc-800 fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mb-3 my-5">
            New Feeds
          </h1>
          <Link to="/trending" className="texthover pl-5 py-4">
            <i className="mr-2 text-2xl ri-fire-fill"></i>
            Trending
          </Link>
          <Link to="/popular" className="texthover pl-5 py-4">
            <i className="mr-2 ri-bar-chart-fill text-2xl"></i>
            Popular
          </Link>
          <Link to="/movie" className="texthover pl-5 py-4">
            <i className="mr-2 ri-film-fill text-2xl"></i>
            Movies
          </Link>
          <Link to="/tv" className="texthover pl-5 py-4">
            <i className="mr-2 ri-tv-fill text-2xl"></i>
            TV Shows
          </Link>
          <Link to="/person" className="texthover pl-5 py-4 mb-4">
            <i className="mr-2 ri-group-fill text-2xl"></i>
            People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400" />

        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className=" text-white font-semibold text-xl mb-3 my-5">
            Website Information
          </h1>
          <Link  to="/about" className="texthover pl-5 py-4">
            <i className="mr-2 ri-information-2-fill text-2xl"></i>
            About
          </Link>
          <Link to="/contact" className="texthover pl-5 py-4">
            <i className="mr-2 ri-contacts-fill text-2xl"></i>
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Slidenav;
