import React, { useEffect } from 'react'
import LoginPage from '../pages/LoginPage'
import BrowsePage from '../pages/BrowsePage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../redux/userSlice'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

    const dispatch = useDispatch()

    const appRoute = createBrowserRouter([
        {
          path:"/",
          element:<LoginPage />
        },
        {
          path:"browse",
          element:<BrowsePage />
        }

      ])


    useEffect(()=>{

        onAuthStateChanged(auth,(user)=>{

          if(user){
            const {uid, email, displayName} = user
            dispatch(addUser(
              {
                uid:uid,
                email:email,
                displayName:displayName
              }
            ))

          }else
          {
            dispatch(removeUser())

          }

        })

    },[])



  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
