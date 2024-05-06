import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import BrowsePage from "./pages/BrowsePage"


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



function App() {


  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  )
}

export default App
