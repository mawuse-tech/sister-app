import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { loading, user } = useSelector((store) => store.isUserLoggedIn)

    // console.log('isUserLoggedIn data:', user)
   if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

    return user ? children : <Navigate to={'/'} replace />

};


export const PublicRoute = ({ children }) => {
    const { loading, user } = useSelector((store) => store.isUserLoggedIn)

    if (loading) return <div>loading ...</div>

    return !user ? children : <Navigate to={'/userdash'} replace />

}