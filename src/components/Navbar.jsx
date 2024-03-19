import { useState } from 'react'
import '../assets/Navbar.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  

  return (
    <>
        <div className="nav-container bg-slate-300 ">
                <h2 className='text-5xl font-bold  '> PartyPro</h2>
                <ul>

        
          <NavLink exact to="/ro" activeClassName="active" className="nav-links text-black">Home</NavLink> 
          <NavLink exact to="/ro" activeClassName="active" className="nav-links text-black">Login</NavLink> 
          <NavLink exact to="/ro" activeClassName="active" className="nav-links text-black">SignUp</NavLink> 
                </ul>
          {/* <NavLink exact to="/ro" activeClassName="active" className="nav-links">home</NavLink>  */}
          {/* <NavLink exact to="/ro" activeClassName="active" className="nav-links">home</NavLink>  */}
        </div>

    </>
  )
}

export default Navbar
