import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";



const VideoTitle = ({title, overview}) => {
  return (
    <div className=' py-10 xl:py-20 absolute bg-gradient-to-b aspect-video from-black/40 to-black/40 text-white  px-14'>

            <h1 className=' text-lg lg:text-lg xl:text-4xl lg:mt-10 mt-48 font-bold' >{title}</h1>
            <p className=' text-md xl:text-lg w-1/3 py-8 text-white '>{overview}</p>

            <div className='flex '>
                <button className='px-12 hover:bg-gray-400 py-3 flex items-center gap-2  bg-gray-100 text-lg text-black rounded-md'>
                <FaPlay size={16} /> Play
                    </button>

                <button className='px-12 py-3 flex items-center gap-2 hover:bg-gray-400 mx-3 bg-gray-500 bg-opacity-70 text-white text-lg rounded-md'>

                <CiCircleInfo size={22} color='white' /> More Info
                </button>
            </div>


    </div>
  )
}

export default VideoTitle
