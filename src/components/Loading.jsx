import loader from '/loader1.gif'
import React from 'react'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <img className='w-[30%]' src={loader} alt="" />
    </div>
  )
}

export default Loading

