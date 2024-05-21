import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../redux/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../constant/constants"



const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch()

    const getMoviesClip = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
       // console.log(json.results)

        const filteredTrailer = json.results.filter((video)=> video.type === "Trailer" && video.name==="Official Trailer")
        const trailer = filteredTrailer.length?filteredTrailer[0]:json.results[0]
        dispatch(addTrailerVideo(trailer))
       // console.log(trailer)

    }

    useEffect(()=>{
        getMoviesClip()
    },[])
}

export default useMovieTrailer;