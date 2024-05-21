import React from 'react'
import { MOVIE_CDN_URL } from '../constant/constants'

const MovieCard = ({movie}) => {

  return (
    <div className='h-[300px] flex items-center justify-center '>
        <div className='hover:scale-110 ease-in duration-200'>
        <img
            className='w-[150px]  h-[200px] xl:w-[200px] xl:h-[220px] rounded-md'
            src={`${MOVIE_CDN_URL}${movie.poster_path}`} alt="" />
        </div>

    </div>
  )
}

export default MovieCard
