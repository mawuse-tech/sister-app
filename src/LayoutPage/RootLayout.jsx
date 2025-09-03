import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        {/* <Footer/>  */}
    </div>
  )
}

export default RootLayout