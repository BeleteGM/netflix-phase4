// import React, { useState } from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import {UserAuth} from '../AutoContext';
// import bannerimage from '../../images/Home/ET-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'
// const Login = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const  {User, login}  = UserAuth();
//  const Navigate=useNavigate();

//  const handleEvent = async (e) => {
//    e.preventDefault();
//    try {
//      await login(email, password);
//      Navigate('/')
//    } catch (error) {
//      console.log(error);
//    }
//  };
//   return (
//     <>
//      <div className='w-full h-screen '>
//         <img src={bannerimage} alt='bannerImage' className='w-full h-full object-cover absolute hidden sm:block '/>
//         <div className='w-full h-screen fixed bg-black/60 right-0 top-0'>
//             <div className='w-full px-4 py-24 z-50 fixed'>
//                 <div className='max-w-[450px] h-[600px] mx-auto text-white bg-black/75'>
//                     <div className='max-w-[320px] mx-auto py-16'>
//                         <h1 className='font-bold sm:text-3xl text-white items-center text-center'>Log In</h1>
                 
//                     <form className=' flex  flex-col py-6' onSubmit={handleEvent}>
//                         <input onChange={(e) => setEmail(e.target.value)} className='my-3 py-2 bg-gray-600 rounded' type='Email' placeholder='Email' autoComplete='Email'/>
//                         <input onChange={(e) => setPassword(e.target.value)} className='my-3 py-2 bg-gray-600 rounded' type='password' placeholder='password' autoComplete='current_password'/>
//                         <button className='bg-red-600 font-bold  w-full my-6 py-3 rounded-full'>Log in</button>
//                         <div className='flex justify-between items-center text-sm text-gray-600'>
//                         <p><input type='checkbox' className='mr-2'/> Remember me</p>
//                               <p>Need help?</p>

//                         </div>
//                         <div className=' flex py-3 justify-between'>
//                         <p className=''><span className='text-gray-600 '>new to netflex?</span>
//                         </p>
//                         <p><Link to='/signup/'>Sign UP</Link></p>
//                         </div>
//                     </form>
//                     </div>
//                 </div>
//         </div>
//         </div>
//         </div>
     
//     </>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AutoContext';
import bannerimage from '../../images/Home/ET-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  login  = useAuth();
  const navigate = useNavigate();

  const handleEvent = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img src={bannerimage} alt="bannerImage" className="w-full h-full object-cover absolute hidden sm:block" />
        <div className="w-full h-screen fixed bg-black/60 right-0 top-0">
          <div className="w-full px-4 py-24 z-50 fixed">
            <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/75">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="font-bold sm:text-3xl text-white items-center text-center">Log In</h1>
                <form className="flex flex-col py-6" onSubmit={handleEvent}>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-3 py-2 bg-gray-600 rounded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="my-3 py-2 bg-gray-600 rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 font-bold w-full my-6 py-3 rounded-full" type="submit">
                    Log in
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input type="checkbox" className="mr-2" /> Remember me
                    </p>
                    <p>Need help?</p>
                  </div>
                  <div className="flex py-3 justify-between">
                    <p>
                      <span className="text-gray-600">New to Netflix?</span>
                    </p>
                    <p>
                      <Link to="/signup/">Sign Up</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;