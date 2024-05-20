import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovie from '../components/MainMovie'
import MoviesContainer from '../components/MoviesContainer'



const BrowsePage = () => {


  useNowPlayingMovies()

  return (
    <div className=' overflow-x-hidden'>
      <Header />
      <MainMovie />
      <div className=''>
        <MoviesContainer />
      </div>
    </div>
  )
}

export default BrowsePage