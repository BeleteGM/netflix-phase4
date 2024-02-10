

import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
  
    
    </div>
  );
}

export default App;
