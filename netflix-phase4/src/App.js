

import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';

import Main from './Component/Main/Main';
function App() {
  return (
    <div className=''>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
  
    
    </div>
  );
}

export default App;
