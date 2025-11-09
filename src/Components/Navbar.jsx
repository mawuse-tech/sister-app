import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../redux-store/features/users/userThunks";
import toast from "react-hot-toast";
import { FiGrid, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { loading } = useSelector((store) => store.logout);
  const { user } = useSelector((store) => store.isUserLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logoutUser() {
    try {
      const userLogout = await dispatch(logout()).unwrap();
      if (userLogout.success === true) {
        toast.success(userLogout.message);
        dispatch(isUserLoggedIn());
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className="navbar bg-white shadow-sm px-4 sticky top-0 z-50">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-[#BA68C8] p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box shadow-md w-52 mt-3 text-[#BA68C8]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            {user && (
              <li><button onClick={logoutUser} className="text-red-600">Logout</button></li>
            )}
          </ul>
        </div>

        {/* LOGO */}
        <NavLink to="/" className="font-extrabold text-2xl tracking-widest">
          <span className="text-purple-800">SIS</span>
          <span className="text-pink-500">TERS</span>
        </NavLink>
      </div>

      {/* CENTER MENU (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-[#BA68C8] font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="flex items-center gap-4">
            {/* Show Dashboard if Volunteer */}
            {user?.isVolunteer && (
              <NavLink to="/sisdash" className="flex items-center text-[#BA68C8] font-medium">
                <FiGrid className="text-xl" />
                <span className="hidden sm:inline">&nbsp;Dashboard</span>
              </NavLink>
            )}

            {/* User Profile */}
            <NavLink to="/userdash" className="flex items-center gap-1">
              <FiUser className="text-[#BA68C8] text-2xl" />
              <span className="hidden sm:inline text-gray-700 font-medium">
                {capitalize(user.firstName)} {capitalize(user.lastName)}
              </span>
            </NavLink>

            {/* Desktop Logout */}
            <button
              onClick={logoutUser}
              disabled={loading}
              className="hidden lg:block px-4 py-2 border border-[#BA68C8] text-[#BA68C8] rounded-lg hover:bg-[#BA68C8] hover:text-white transition">
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn bg-white border-[#BA68C8] text-[#BA68C8]">Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="btn bg-[#BA68C8] text-white border-none hover:bg-purple-400">
                Sign Up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
