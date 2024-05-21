import React from 'react'
import { BG_URL } from '../constant/constants'
import GPTSearchBar from '../components/GPTSearchBar'

const GPTSearchPage = () => {
  return (
    <div className='reletive'>
        <img className='absolute -z-10 h-screen w-screen' src={BG_URL} alt="" />

        <h1>GPT search page</h1>
        <GPTSearchBar />

    </div>
  )
}

export default GPTSearchPage
