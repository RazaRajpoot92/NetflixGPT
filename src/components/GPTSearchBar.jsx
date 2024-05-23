import React, { useRef } from 'react'
import LANGUAGE from '../constant/language'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'


const GPTSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang)
    const gptSearchText = useRef(null)

const handleGptSearchClick = async()=>{
  console.log(gptSearchText.current.value)

  const gptQuery = `Act as a movie recommendation system for the query ${gptSearchText.current.value}.
  only give me names of 5 movies, comma separated like example result given ahead
   Example Result: Mola Jutt, Sholay, Don, Gadar, Om back`

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices)

}


  return (
    <div className='flex justify-center mt-32'>
      <form action=""
      className='w-1/3 grid grid-cols-12 bg-black/80 rounded-lg shadow-lg shadow-black p-10'
      onSubmit={(e)=>e.preventDefault()}>

        <input
        ref={gptSearchText}
        placeholder={LANGUAGE[langKey].gptSearchPlaceholder}
         className='col-span-9 p-2 text-gray-700 h-14 rounded-md' type="text" />

        <button

        onClick={handleGptSearchClick}

        className='text-white font-semibold hover:bg-red-800 col-span-3 ml-2 bg-red-600 rounded-md py-2 px-4'>
            {LANGUAGE[langKey].search}
            </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
