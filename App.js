import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from "./components/Home"
import './components/style.css'
function App() {
  return (
  
    <div className='menubar'>
     <BrowserRouter>
    <Routes>
      <Route path="" element={<Login />} />
       <Route path="/login" element={<Login />} />  
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
    
      </div>
      
   
  );
}

export default App;
