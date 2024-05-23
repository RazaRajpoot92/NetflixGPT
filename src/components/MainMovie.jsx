import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import BackgroundVideo from './BackgroundVideo';

const MainMovie = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[4]
    const {original_title, overview, id} = mainMovie


  return (
    <div className=''>
        <VideoTitle title = {original_title} overview = {overview} />
        <BackgroundVideo movieId = {id} />
    </div>
  )
}

export default MainMovie
