import React from 'react';
import {Link} from 'react-router-dom';
import bannerimage from '../../images/Home/ET-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'
const Login = () => {
  return (
    <>
     <div className='w-full h-screen '>
        <img src={bannerimage} alt='bannerImage' className='w-full h-full object-cover absolute hidden sm:block '/>
        <div className='w-full h-screen fixed bg-black/60 right-0 top-0'>
            <div className='w-full px-4 py-24 z-50 fixed'>
                <div className='max-w-[450px] h-[600px] mx-auto text-white bg-black/75'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='font-bold sm:text-3xl text-white items-center text-center'>Log In</h1>
                 
                    <form className=' flex  flex-col py-6'action='/'>
                        <input className='my-3 py-2 bg-gray-600 rounded' type='Email' placeholder='Email' autoComplete='Email'/>
                        <input className='my-3 py-2 bg-gray-600 rounded' type='password' placeholder='password' autoComplete='current_password'/>
                        <button className='bg-red-600 font-bold  w-full my-6 py-3 rounded-full'>Log in</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input type='checkbox' className='mr-2'/> Remember me</p>
                              <p>Need help?</p>

                        </div>
                        <div className=' flex py-3 justify-between'>
                        <p className=''><span className='text-gray-600 '>new to netflex?</span>
                        </p>
                        <p><Link to='/signup/'>Sign UP</Link></p>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
        </div>
        </div>
     
    </>
  );
}

export default Login;
