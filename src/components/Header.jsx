import React, { useState, useEffect, useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/userSlice';


const Header = () => {


    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const menuRef = useRef(null)
    const dispatch = useDispatch()

    const user = useSelector(store=>store.user)


    const handleSignOut = ()=>{

        signOut(auth)
        .then(()=> navigate("/")
        ).catch((error)=> console.log(error.message))

    }

    useEffect(()=>{

       const unsubcribe =  onAuthStateChanged(auth,(user)=>{

            if(user){
              const {uid, email, displayName} = user
              dispatch(addUser(
                {
                  uid:uid,
                  email:email,
                  displayName:displayName
                }
              ))

              navigate("/browse")

            }else
            {
              dispatch(removeUser())
              navigate("/")

            }

          })



        const handleClickOutSide = (event)=>{
           if(menuRef.current && !menuRef.current.contains(event.target)){

            setMenu(false)

           };
        }

       document.addEventListener("mousedown", handleClickOutSide)

        return()=>{
            unsubcribe()
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    },[])

  return (
    <div className='h-20 px-8 flex justify-between items-center bg-black'>

        <div className='flex items-center gap-4'>

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

            <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

            <div ref={menuRef} className='relative user-menu'>
             <FaCaretDown onClick={()=>setMenu(!menu)} color='white' className='cursor-pointer' size={18} />

             {menu&&<div className='bg-gray-800 top-8 rounded-md text-white flex flex-col items-center  p-2  right-0 absolute w-36 '>
                <button className='hover:bg-gray-600 w-full rounded-md p-1'>{user&&user.displayName}</button>
                <button onClick={handleSignOut} className='hover:bg-gray-600 w-full rounded-md p-1' >Sign Out</button>
             </div>}

            </div>
        </div>

    </div>
  )
}

export default Header
