import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovie from '../components/MainMovie'
import MoviesContainer from '../components/MoviesContainer'
import useNowPopularMovies from '../hooks/useNowPopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GPTSearchPage from './GPTSearchPage'



const BrowsePage = () => {

  const showGPT = useSelector(store=>store.gpt.showGpt)




  useNowPlayingMovies()
  useNowPopularMovies()
  useUpcomingMovies()

  return (
    <div className=' overflow-x-hidden'>
      <Header />
      {showGPT?(<GPTSearchPage />):(
        <>
          <MainMovie />
          <MoviesContainer />
        </>
      )}


    </div>
  )
}

export default BrowsePage