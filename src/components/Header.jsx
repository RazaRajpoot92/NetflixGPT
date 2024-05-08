import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <div className='h-20 px-8 flex justify-between items-center bg-black'>

        <div className='flex items-center'>

            <img className='w-40 ' src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"} alt="" />

            <div className='flex text-white gap-4'>
                <h2>Home</h2>
                <h2>Series</h2>
                <h2>Films</h2>
                <h2>New & Popular</h2>
            </div>
       </div>

        <div className='flex items-center gap-2'>

            <div className='flex items-center border border-gray-300 h-8 rounded-full p-2'>

                <input className='bg-black h-7 text-sm w-52 p-1 outline-none text-white' type="text" />
                <IoIosSearch color='white' size={30} />

            </div>

            <img className='w-10 h-10' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

        </div>

    </div>
  )
}

export default Header
