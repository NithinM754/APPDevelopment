import { useState } from 'react'

// import './App.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainlogin from './components/mainlogin';
function App() {


  return (
    <>
    <BrowserRouter>
       
       <Routes>
         {/* <Route path="/Home" element={<><Navbar/><Login/></>} /> */}
         {/* <Route path="/" element={<><Navbar/><Login/></>} /> */}
         {/* <Route path="/" element={<><Demo/></>} /> */}
         <Route path="/" element={<><Mainlogin/></>} />
         
         </Routes>
         </BrowserRouter>
    
    {/* <Navbar/>
    <Login/> */}
      

    </>
  )
}

export default App
