import Notfound from '/404.gif'
import React from 'react'
import { Link, useNavigate} from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (

    <div className='w-screen h-screen absolute top-0 left-0  bg-black'>
      <div className="w-full h-full flex justify-center items-center ">
      <Link
       onClick={() => navigate(-1)}
          className="hover:text-[#ea0014]  text-zinc-400 text-5xl ri-close-fill relative right-[30%] top-[-40%]"
        />
      <img className='w-[30%]' src={Notfound} alt="" />
      </div>
    </div>
  )
}

export default NotFound

