import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const MoviesContainer = () => {

    const movies = useSelector(store=>store.movies)
    const moviesList = movies.nowPlayingMovies


  return (

      <div className='p-2 px-9 bg-black '>
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Trending" movies={moviesList} />
        <MovieList title="Action" movies={moviesList} />
      </div>

  )
}

export default MoviesContainer
