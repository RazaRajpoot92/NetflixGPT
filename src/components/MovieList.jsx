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
        slidesToShow: 8,
        slidesToScroll: 7,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 9,
                slidesToScroll: 8,
                infinite: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 5,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3
              }
            }
          ]
      };

  return (

    <div className='py-2 text-white '>
        <h1 className='text-2xl font-semibold mb-2'>{title}</h1>

        <Slider {...settings}>
            {movies?.map((movie)=> <MovieCard movie ={movie} /> )}
        </Slider>
    </div>
  )
}

export default MovieList
