

import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Login from './Component/Loginpage/Login';
import Signup from './Component/Loginpage/Signup';
import Account from './Component/Loginpage/Account';
import Movies from './Component/Movies/Movies';
import Tvshows from './Component/TVshows/TVshows';
import Latest from './Component/Latest/Latest';
import Mylist from './Component/Mylist/Mylist';
import Footer1 from './Component/NavBar/Footer1';
import Notfound from './Component/Notfound/Notfound';
// import Header2 from './Component/Header/Header2';
function App() {
  return (
    <div className=''>
      
      <Header/>
      {/* <Header2/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Movies/" element={<Movies/>}/>
        <Route path='/tvshows/' element={<Tvshows/>}/>
        <Route path="/mylist/" element={<Mylist/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/signup/" element={<Signup/>}/>
        <Route path="/account/" element={<Account/>}/>
        <Route path='*'    element={<Notfound/>}/>
      </Routes>
      <Footer1/>
  
    
    </div>
  );
}

export default App;
