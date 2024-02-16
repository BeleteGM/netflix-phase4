import React, { useEffect, useState } from 'react';
import Request from '../../Request';
import axios from '../Axios';

const Banner = () => {
    const [movies, setmovies]= useState([]);
    const movie= movies[Math.floor(Math.random()*movies.length)];

    useEffect(()=>{
      axios.get(Request.popular)
      .then((response)=>{
        setmovies(response.data.results);
      })


    },[])
    console.log(movies);

  return (
    <>
      
    </>
  );
}

export default Banner;
