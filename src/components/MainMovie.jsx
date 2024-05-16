import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';

const MainMovie = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[0]
    const {original_title, overview} = mainMovie
    console.log(mainMovie)

  return (
    <div>
        <VideoTitle title = {original_title} overview = {overview} />


    </div>
  )
}

export default MainMovie
