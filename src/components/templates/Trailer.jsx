import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import NotFound from '../NotFound';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const yttraier = useSelector(state => state[category].info.videos);

    return yttraier ? (
        <div
            onClick={() => navigate(-1)}
            className='z-[100] bg-[rgb(0,0,0)] top-0 left-0 w-screen h-screen flex items-center justify-center fixed'
        >
            <div className='relative'>
                {/* Close button */}
                <Link
                    to="#"
                    onClick={() => navigate(-1)}
                    className="absolute top-[-2.8rem] right-5 text-[#ea0014] text-4xl md:text-4xl ri-close-fill"
                />
                {/* ReactPlayer */}
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${yttraier.key}`}
                    width="90vw" // Responsive width
                    height="80vh" // Responsive height
                    style={{ maxWidth: '1200px', maxHeight: '800px' }} // Max constraints
                />
            </div>
        </div>
    ) : <NotFound />;
};

export default Trailer;
