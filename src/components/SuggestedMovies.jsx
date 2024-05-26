import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SuggestedMovies = () => {

    const movies = useSelector(store=>store.movies)

  return (
    <div>
        <MovieList title="" movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SuggestedMovies