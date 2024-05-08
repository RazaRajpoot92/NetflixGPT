import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import BrowsePage from "./pages/BrowsePage"
import {Provider, useDispatch} from "react-redux"
import appStore from "./redux/appStore"
import { useEffect } from "react"
import {onAuthStateChanged} from "firebase/auth"
import { auth } from "./utils/firebase"
import { addUser, removeUser } from "./redux/userSlice"
import Body from "./components/Body"







function App() {



  return (
    <>
      <Provider store={appStore}>

        <Body />

      </Provider>
    </>
  )
}

export default App
