import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Contact from './components/Contact';
import About from './components/About';
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Peopledetails from "./components/Peopledetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <div className="primary w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path = "/movie/details/:id/trailer" element={<Trailer/>} />
        
        </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
        <Route path = "/tv/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Peopledetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
};

export default App;
