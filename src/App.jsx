import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isUserLoggedIn } from './redux-store/features/users/userThunks'

import RootLayout from './LayoutPage/RootLayout'
import DashboardStructure from './LayoutPage/DashboardStructure'
import ProfileLayout from './LayoutPage/ProfileLayout'

import Hero from './Pages/HomePages/Hero'
import AboutUs from './Pages/HomePages/AboutUs'
import ContactUs from './Pages/HomePages/ContactUs'
import Services from './Pages/HomePages/Services'
import LoginPage from './Pages/AuthPages/LoginPage'
import SignupSister from './Pages/AuthPages/SignupSister'
import SignupUser from './Pages/AuthPages/SignupUser'
import ForgotPassword from './Pages/AuthPages/ForgotPassword'
import ResetPassword from './Pages/AuthPages/ResetPassword'

import SisterDashboard from './Pages/SisterPages/SisterDashboard'
import SisMessages from './Pages/SisterPages/SisMessages'
import AvailabilityPage from './Pages/SisterPages/AvailabilityPage'
import EditProfilePage from './Pages/SisterPages/EditProfilePage'

import UserDashboard from './Pages/UserPages/UserDashboard'
import ViewAllSisters from './Pages/UserPages/ViewAllSisters'
import SisterProfile from './Pages/UserPages/SisterProfile'
import ViewAllChat from './Pages/UserPages/ViewAllChat'

import { PrivateRoute, PublicRoute } from './helpers/ProtectRoute'
import Chat from './Pages/UserPages/Chat'
import ChatsLayout from './LayoutPage/ChatsLayout'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Hero />

      },
      {
        path: "about",
        element: <AboutUs />

      },
      {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        )
      },
      {
        path: "volunteer",
        element: (
          <PrivateRoute>
            <SignupSister />
          </PrivateRoute>
        )
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignupUser />
          </PublicRoute>
        )
      },
      {
        path: "forgotpassword",
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        )
      },
      {
        path: "resetpassword/:token",
        element: (
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        )
      },

      {
        path: "sisdash",
        element: (
          <PrivateRoute>
            <DashboardStructure />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <SisterDashboard />
          },
          {
            path: "sismessage",
            element: <SisMessages />
          },
          {
            path: "available",
            element: <AvailabilityPage />
          },
          {
            path: "edit",
            element: <EditProfilePage />
          }
        ]
      },
      {
        path: "userdash",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        )
      },
      {
        path: "allsisters",
        element: (
          <PrivateRoute>
            <ProfileLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <ViewAllSisters />
          },
          {
            path: ":id",
            element: <SisterProfile />
          }
        ]
      },
    ]
  },

  {
    path: "/chatbox",
    element: (
      <PrivateRoute>
        <ChatsLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Chat />
      },
      {
        path: ":id",
        element: <Chat />
      },
    ],
  },

])

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUserLoggedIn())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
