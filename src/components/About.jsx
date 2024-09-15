import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "RankFlix | About";
  const navigate = useNavigate();
  return (
    <div>
 <div className=" flex  items-center gap-5 p-5  text-zinc-400 font-semibold  ">
      <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-3xl  ri-arrow-left-line"
          ></i>
        <h1 className="text-2xl ">
          About
        </h1>
      </div>
    <div className="px-[10%] mt-[5%] text-zinc-100 ">
      <p className="text-lg mb-4">
        Welcome to RankFlix! We are dedicated to providing movie enthusiasts with a comprehensive platform to discover, rate, and review their favorite films. Whether you're a casual viewer or a cinema aficionado, our app is designed to enhance your movie-watching experience.
      </p>
      <p className="text-lg mb-4">
        Launched in 2024, RankFlix has evolved from a simple movie rating tool into a leading destination for movie lovers. Our mission is to offer a user-friendly interface where you can explore movie ratings, share your opinions, and connect with others who share your passion for cinema.
      </p>
      <p className="text-lg mb-4">
        Our key features include:
        <ul className="list-disc pl-5 mt-2">
          <li>Comprehensive movie database with detailed ratings and reviews</li>
          <li>Personalized recommendations based on your ratings and preferences</li>
          <li>A user-friendly interface for easy browsing and rating</li>
          <li>Community-driven reviews to help you make informed viewing choices</li>
        </ul>
      </p>
      <p className="text-lg">
        Thank you for visiting RankFlix. We are committed to continuously improving our platform to meet your needs. If you have any questions or feedback, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
      </p>
    </div>
    </div>
  );
};

export default About;
