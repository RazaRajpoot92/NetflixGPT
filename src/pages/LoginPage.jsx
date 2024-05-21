import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { BG_URL } from '../constant/constants'

const LoginPage = () => {

  const user = useSelector(store=>store.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(user)=>{

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

    return ()=> unsubscribe()

  },[])




  return (
    <div className='bg-cover relative bg-center'

    style={{backgroundImage:`url(${BG_URL})`}}>
        <div className=' opacity-30 h-full w-full absolute  bg-gradient-to-b from-black to-black '></div>

        <img className='w-48 ml-20 mt-5 absolute ' src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"} alt="" />

        <div className=' z-10 sticky w-full py-20'>
         <LoginForm />
        </div>
        <div className='sticky'>
        <Footer />
        </div>
    </div>
  )
}

export default LoginPage