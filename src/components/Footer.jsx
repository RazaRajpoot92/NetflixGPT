import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-40 py-20 bg-black bg-opacity-80 text-gray-200'>
        <h1>Questions? Contact us.</h1>

        <div className='w-full my-5 flex justify-between underline'>
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
        </div>
        <div className='flex my-5 underline'>
            <p className='mr-8'>Cookie Preferences</p>
            <p>Corporate Information</p>
        </div>
        
        </div>
  )
}

export default Footer