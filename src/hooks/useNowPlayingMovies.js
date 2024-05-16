import { useDispatch } from "react-redux"
import { API_OPTIONS, MOVIE_API } from "../constant/constants"
import { addNowPlayingMovies } from "../redux/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const getMovies = async()=>{
      const data = await fetch(MOVIE_API,API_OPTIONS)
      const json = await data.json()
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    }


    useEffect(()=>{

      getMovies()

    },[])
}

export default useNowPlayingMovies;