import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovie from '../components/MainMovie'



const BrowsePage = () => {


  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainMovie />
    </div>
  )
}

export default BrowsePage