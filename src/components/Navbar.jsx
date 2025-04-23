import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/postpage">View Blogs</NavLink>
        <NavLink to="/createpost">Create posts✏️</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/login">Login</NavLink>
        
      </nav>
    </div>
  )
}

export default Navbar
