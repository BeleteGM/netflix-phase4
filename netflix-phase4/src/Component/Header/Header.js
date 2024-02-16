import React from 'react';
import './Header.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import netflixlogo from '../../images/icons/Netflix_Logo_PMS (3) copy.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=''>
      <div className='flex header w-full items-center justify-between  absolute z-[100]'>
        <Link to='/'><div className=' font-bold text-white-600 px-4 py-2 text-5xl cursor-pointer'>
            <img src={netflixlogo} className='w-40' alt='netflex logo' />  </div></Link>
            <Link to='/home/'><div className='text-white font-sm'>home</div></Link>
            <Link to='/movies/'><div className='text-white font-sm'>movies</div></Link>
            <Link to='/tvshows/'><div className='text-white font-sm'>Tv shows</div></Link>
            <Link to='/latest/'><div className='text-white font-sm'>latest</div></Link>
           <Link to='/mylists/'> <div className='text-white font-sm'>my list</div></Link>
            <Link to='/languages/'><div className='text-white font-sm'>Browse by languages</div></Link>
       
        <div className='flex text-white'>
        <Link to='/search/'><div className=' text-sm mr-2 py-2  text-blue-400'><SearchRoundedIcon/></div></Link>
      <Link to='/notifcation/'><div className=' text-sm mr-2 text-blue-500 py-2'><NotificationsNoneRoundedIcon/></div></Link>
        <div className=' text-sm mr-2 py-2 text-blue-600'>< PermContactCalendarRoundedIcon/></div>
      <Link to='/login/' > <div> <button className=' text-sm px-6 py-2 mr-4 bg-blue-400 cursor-pointer'>Sign In</button></div></Link>
        <Link to='/signup/'><div><button className='text-sm px-6 py-2 mr-4 rounded border-red-700 bg-red-400 cursor-pointer'>SignUp</button></div></Link>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
