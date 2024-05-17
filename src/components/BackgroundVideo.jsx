import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const BackgroundVideo = ({movieId}) => {

    const trailer = useSelector(store=>store.movies.trailerVideo)

    useMovieTrailer(movieId)


  return (
    <div className=''>

        <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/lV1OOlGwExM?si=${trailer&&trailer.key} `}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>

        </iframe>
    </div>
  )
}

export default BackgroundVideo
