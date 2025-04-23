import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Homeus from '../components/Homeus'

const Home = () => {
  return (
    <div>
      
      <header>
        <Navbar />
      </header>
      
      <div className='home'>
       <Homeus/>
      </div>
    
      
    </div>
  )
}

export default Home
