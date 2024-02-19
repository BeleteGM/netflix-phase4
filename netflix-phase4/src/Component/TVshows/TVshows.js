import axios from 'axios';
import Request from '../../Request';
import React, { useEffect, useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import $ from "jquery";
import TvshowsBanner from './TvshowsBanner';

// import {Mdchvernright, Mdchvernleft} from '@mui/icons-material';


const Tvshows = ({title, FETCHURL}) => {
    const [moviest, setmoviest]= useState([]);
    const [like, setlike]=useState(false);
    useEffect(()=>{
        axios.get(Request.requestTVshows)
        .then((res) => {
      setmoviest(res.data.results);
        })
          
          // setmovies(json.results);
        
        .catch(err => console.error('error:' + err));
      }, [FETCHURL])
      console.log(moviest);

      let scrollLeft= ()=>{
        let slider= $('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      }
      let scrollright= ()=>{
        let slider= $('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      }

  return (
    <>
    <TvshowsBanner/>
 
      <h1 className='text-blue-200  md:text-2xl p-5 pt-10'>{title}</h1>
      <div className='relative flex item-center group mx-20'>
        {/* <div className=''><Mdchvernleft className='text-white rounded-full bg-blue-400 p-4'/> */}

        <div id ={'slider'} className='w-full h-full  relative'>
    
            {moviest.map((items, id)=>(
<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] inline-block cursor-pointer transition-transform  relative top-0 left-0 p-2  '>
<img  src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} className='w-full h-auto hover:scale-110 block' alt={items?.title}/>

<div className='w-full absolute top-5 left-0 text-white opacity-0 hover:opacity-100 font-bold'>
<p className='h-full text-sm items-center flex justify-center'>{items?.title}</p>
<p>
{like ? <FaHeart   className='text-red-600 font-bold left-8 top-4 '/>: <FaRegHeart  className='text-red-600 font-bold  top-8 '/>}
</p>
</div>
      
</div>
            ))}



        </div>
        {/* <Mdchvernright className="h-5 w-5 text-blue-500 right-0 " /> */}
        {/* </div> */}
       
      </div>
    </>
  );
}


export default Tvshows;