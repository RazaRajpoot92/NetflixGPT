import React from 'react'
import { MOVIE_CDN_URL } from '../constant/constants'

const MovieCard = ({movie}) => {

  return (
    <div className='h-[300px] flex items-center justify-center '>
        <div className='hover:scale-110 ease-in duration-200'>
        <img
            className='w-[200px]  h-[240px] rounded-md'
            src={`${MOVIE_CDN_URL}${movie.poster_path}`} alt="" />
        </div>

    </div>
  )
}

export default MovieCard
