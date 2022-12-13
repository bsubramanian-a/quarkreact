import React from 'react';
import './App.css';
import Login from './screens/Login';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/coach/dashboard' element={<Dashboard/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
