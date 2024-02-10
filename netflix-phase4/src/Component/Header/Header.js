import React from 'react';
import './Header.css';
import netflixlogo from '../../images/icons/Netflix_Logo_PMS (3) copy.png'

const Header = () => {
  return (
    <div className=''>
      <div className='flex header w-full items-center justify-between  absolute z-[100]'>
        <div className=' font-bold text-white-600 px-4 py-2 text-5xl cursor-pointer'>
            <img src={netflixlogo} className='w-40' alt='netflex logo' />
        </div>
        <div className='flex text-white'>
        <div className=' text-sm mr-2 py-2'>UNLIMITED TV SHOWS & MOVIES</div>
       <div> <button className=' text-sm px-6 py-2 mr-4 bg-blue-400 cursor-pointer'>join now</button></div>
        <div><button className='text-sm px-6 py-2 mr-4 rounded border-red-700 bg-red-400 cursor-pointer'>Sign Out</button></div>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
