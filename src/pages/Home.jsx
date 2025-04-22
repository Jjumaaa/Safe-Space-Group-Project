import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <header>
        {/* <h1>Safe-space!</h1> */}
        <Navbar />
      </header>
      
    </div>
  )
}

export default Home
