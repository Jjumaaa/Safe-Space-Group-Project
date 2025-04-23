import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

const LoginPage = () => {
    
  return (
    <div >
        <header className='logout' >
        <Navbar />
        </header>
        <div className='general-login'>
        <div className='login'>
      <Login/>
      </div>
      </div>
    </div>
  )
}

export default LoginPage