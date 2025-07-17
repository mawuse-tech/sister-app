
import React from 'react'
import SignupSister from './Pages/AuthPages/SignupSister'
import SignupUser from './Pages/AuthPages/SignupUser'
import LoginPage from './Pages/AuthPages/LoginPage'
import DashboardStructure from './Pages/SisterPages/DashboardStructure'
import SisterDashboard from './Pages/SisterPages/SisterDashboard'
import SisMessages from './Pages/SisterPages/SisMessages'
import EditProfilePage from './Pages/SisterPages/EditProfilePage'
import AvailabilityPage from './Pages/SisterPages/AvailabilityPage'
import Navbar from './Components/Navbar'
import ViewAllSisters from './Pages/UserPages/ViewAllSisters'
import Hero from './Pages/HomePages/Hero'

const App = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
       <SignupSister/>
     <SignupUser/> 
     <LoginPage/>
    <SisterDashboard/>
    <SisMessages/>
    <EditProfilePage/>
    <AvailabilityPage/> 
    <ViewAllSisters/>
    </div>
  )
}

export default App