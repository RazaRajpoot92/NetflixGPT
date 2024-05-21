import React from 'react'
import LANGUAGE from '../constant/language'
import { useSelector } from 'react-redux'


const GPTSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang)


  return (
    <div className='flex justify-center mt-32'>
      <form action=""
      className='w-1/3 grid grid-cols-12 bg-black/80 rounded-lg shadow-lg shadow-black p-10'
      onSubmit={(e)=>e.preventDefault()}>

        <input
        placeholder={LANGUAGE[langKey].gptSearchPlaceholder}
         className='col-span-9 p-2 text-gray-700 h-14 rounded-md' type="text" />
        <button className='text-white font-semibold hover:bg-red-800 col-span-3 ml-2 bg-red-600 rounded-md py-2 px-4'>
            {LANGUAGE[langKey].search}
            </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
