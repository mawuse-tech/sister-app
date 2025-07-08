
import React from 'react'
import SignupSister from './Pages/AuthPages/SignupSister'
import SignupUser from './Pages/AuthPages/SignupUser'
import LoginPage from './Pages/AuthPages/LoginPage'
import DashboardStructure from './Pages/SisterPages/DashboardStructure'
import SisterDashboard from './Pages/SisterPages/SisterDashboard'
import SisMessages from './Pages/SisterPages/SisMessages'
import EditProfilePage from './Pages/SisterPages/EditProfilePage'
import AvailabilityPage from './Pages/SisterPages/AvailabilityPage'

const App = () => {
  return (
    <div>
     <SignupSister/>
     <SignupUser/> 
     <LoginPage/>
    <SisterDashboard/>
    <SisMessages/>
    <EditProfilePage/>
    <AvailabilityPage/>
    </div>
  )
}

export default App