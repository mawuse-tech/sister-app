import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { loading, user } = useSelector((store) => store.isUserLoggedIn)

    console.log('isUserLoggedIn data:', user)
    if (loading) return <div>loading ...</div>

    return user ? children : <Navigate to={'/'} replace />

};


export const PublicRoute = ({ children }) => {
    const { loading, user } = useSelector((store) => store.isUserLoggedIn)

    if (loading) return <div>loading ...</div>

    return !user ? children : <Navigate to={'/userdash'} replace />

}