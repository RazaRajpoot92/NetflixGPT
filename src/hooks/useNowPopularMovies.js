import { useEffect } from "react"
import { API_OPTIONS } from "../constant/constants"
import { useDispatch } from "react-redux"
import { addNowPopularMovies } from "../redux/moviesSlice"


const useNowPopularMovies = ()=>{

    const dispatch = useDispatch()


    const getPopularMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS)
        const json = await data.json()
       // console.log(json.results)
        dispatch(addNowPopularMovies(json.results))
    }

    useEffect(()=>{

        getPopularMovies()

    },[])

}

export default useNowPopularMovies;