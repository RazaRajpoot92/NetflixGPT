import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";



const VideoTitle = ({title, overview}) => {
  return (
    <div className='py-20 px-14'>

        <h1 className='text-4xl font-bold' >{title}</h1>
        <p className='text-lg w-1/3 py-8 text-gray-700'>{overview}</p>

        <div className='flex '>
            <button className='px-12 hover:bg-gray-400 py-3 flex items-center gap-2  bg-gray-500 text-lg text-white rounded-md'>
            <FaPlay size={16} /> Play
                </button>

            <button className='px-12 py-3 flex items-center gap-2 hover:bg-gray-200 mx-3 bg-gray-300 text-black text-lg rounded-md'>

            <CiCircleInfo size={22} color='black' /> More Info

            </button>
        </div>

    </div>
  )
}

export default VideoTitle
