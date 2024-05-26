import React from 'react'
import { BG_URL } from '../constant/constants'
import GPTSearchBar from '../components/GPTSearchBar'
import SuggestedMovies from '../components/SuggestedMovies'

const GPTSearchPage = () => {
  return (
    <div className='reletive'>

        <img className='absolute top-0 -z-10  w-screen' src={BG_URL} alt="" />
        {/* <h1>GPT search page</h1> */}
        <GPTSearchBar />
        <SuggestedMovies />

    </div>
  )
}

export default GPTSearchPage
