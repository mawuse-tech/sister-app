import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isUserLoggedIn } from './redux-store/features/users/userThunks'

import RootLayout from './LayoutPage/RootLayout'
import DashboardStructure from './LayoutPage/DashboardStructure'
import ProfileLayout from './LayoutPage/ProfileLayout'
import ChatLayout from './LayoutPage/ChatLayout'

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Hero />
            </PublicRoute>
        )

      },
      {
        path: "about",
        element: (
          <PublicRoute>
            <AboutUs />
          </PublicRoute>
        )

      },
      {
        path: "contact",
        element: (
          <PublicRoute>
             <ContactUs />
          </PublicRoute>
        )
      },
      {
        path: "services",
        element: (
          <PublicRoute>
            <Services />
          </PublicRoute>
        )
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
          <PublicRoute>
            <SignupSister />
          </PublicRoute>
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
        path: "chatbox",
        element: <ChatLayout />,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <ViewAllChat />
              </PrivateRoute>
            )
          }
        ]
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
            path: "profile",
            element: <SisterProfile />
          }
        ]
      },
      {
        path: "chat",
        element: (
          <PrivateRoute>
            <ViewAllChat />
          </PrivateRoute>
        )
      }
    ]
  }
])

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUserLoggedIn())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
