import React from 'react'
import MovieCard from './MovieCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({title,movies}) => {
    const settings = {
        accessibility:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3
              }
            }
          ]
      };

  return (

    <div className='text-white '>
        <h1 className='text-2xl font-semibold mb-2'>{title}</h1>

        <Slider {...settings}>
            {movies?.map((movie)=> <MovieCard key={movie.id} movie ={movie} /> )}
        </Slider>
    </div>
  )
}

export default MovieList
