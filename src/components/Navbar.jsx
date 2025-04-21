import React from 'react';
import { Link, Navlink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'> 
    <Navlink to="/">Home </Navlink>
    <Navlink  to="/viewblogs">View Blogs</Navlink>
    <Navlink to="/createpost">create posts</Navlink>
    <Navlink to="/editpost" >Edit posts✏️</Navlink>
    <Navlink to="/viewcommunity">View Community 🫂</Navlink>
    <Navlink to="/ourteam">our team</Navlink>
    <Navlink to="/contactUs">contact Us 📞</Navlink>

    </nav>
    
  );
};

export default Navbar;
