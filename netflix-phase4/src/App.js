

import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './images/Home/Home';
function App() {
  return (
    <div className=''>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
  
    
    </div>
  );
}

export default App;
