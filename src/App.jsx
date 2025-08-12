
import React, { Children } from 'react'
import Hero from './Pages/HomePages/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Component } from 'react'
import RootLayout from './LayoutPage/RootLayout'
import AboutUs from './Pages/HomePages/AboutUs'
import ContactUs from './Pages/HomePages/ContactUs'
import Services from './Pages/HomePages/Services'
import LoginPage from './Pages/AuthPages/LoginPage'
import SignupSister from './Pages/AuthPages/SignupSister'
import SignupUser from './Pages/AuthPages/SignupUser'
import SisterDashboard from './Pages/SisterPages/SisterDashboard'
import SisMessages from './Pages/SisterPages/SisMessages'
import DashboardStructure from './LayoutPage/DashboardStructure'
import AvailabilityPage from './Pages/SisterPages/AvailabilityPage'
import EditProfilePage from './Pages/SisterPages/EditProfilePage'
import UserDashboard from './Pages/UserPages/UserDashboard'
import ViewAllSisters from './Pages/UserPages/ViewAllSisters'
import SisterProfile from './Pages/UserPages/SisterProfile'
import ProfileLayout from './LayoutPage/ProfileLayout'
import ViewAllChat from './Pages/UserPages/ViewAllChat'
import ChatLayout from './LayoutPage/ChatLayout'


const router = createBrowserRouter(([
  {
    index: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Hero
      },

      {
        path: "about",
        Component: AboutUs
      },

      {
        path: "contact",
        Component: ContactUs
      },

      {
        path: "services",
        Component: Services
      },

      {
        path: "login",
        Component: LoginPage
      },

      {
        path: "signup",
        Component: SignupSister
      },

      {
        path: "user",
        Component: SignupUser
      },

      {
       path: "chatbox",
       Component: ChatLayout,
       children: [
        {
          index: true,
          Component: ViewAllChat
        }
       ]
      },

      {
        path: "sisdash",
        Component: DashboardStructure,
        children: [
         {
           index: true,
           Component: SisterDashboard
         },

         {
          path: "sismessage",
          Component: SisMessages
         },

         {
          path: "available",
          Component: AvailabilityPage
         },

         {
          path: "edit",
          Component: EditProfilePage
         }
        ]
      },

      {
        path: "userdash",
        Component: UserDashboard
      },

      {
        path: "allsisters",
        Component: ProfileLayout,
        children: [
          {
            index: true,
            Component: ViewAllSisters
          },

          {
            path: "profile",
            Component: SisterProfile
          }
        ]
      }
    ]
  }
]))

const App = () => {
  return <RouterProvider router={router}/>
}

export default App