import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const MoviesContainer = () => {

    const movies = useSelector(store=>store.movies)

  return (

      <div className='p-2 px-9 bg-black/90 '>
        <div className='-mt-64 relative z-40'>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.nowPopularMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        </div>
      </div>

  )
}

export default MoviesContainer
