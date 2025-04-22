import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/createpost">Create posts✏️</NavLink>
        <NavLink to="postpage">Blogs</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
