import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../redux-store/features/users/userThunks";
import toast from "react-hot-toast";
import { span } from "framer-motion/m";
import { FiGrid, FiUser } from "react-icons/fi";


const Navbar = () => {

  const { loading, error } = useSelector((store) => store.logout);
  const { user } = useSelector((store) => store.isUserLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  async function logoutUser() {
    try {

      const userLogout = await dispatch(logout()).unwrap();

      if (userLogout.success === true) {
        toast.success(userLogout.message);
        dispatch(isUserLoggedIn())
        navigate("/");
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <a className="text-2xl font-bold text-purple-800 tracking-widest">SIS</a>
        <a className="text-2xl font-bold text-pink-500 tracking-widest">TERS</a>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#BA68C8] font-italic">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (


          <div className="flex items-center gap-4">

            {user?.isVolunteer === true && (
              <NavLink to="/sisdash" className="flex items-center gap-2 text-[#BA68C8] font-medium hover:text-purple-900 transition">
                <FiGrid className="text-lg" />
                <span className="text-gray-600">My Dashboard</span>
              </NavLink>
            )}

            <NavLink to="/userdash">
              <div className="flex items-center gap-2">
                {/* User Icon */}
                <FiUser className="text-[#BA68C8] text-2xl" />

                {/* Full Name */}
                <span className="text-sm text-gray-600 font-medium">
                  {capitalize(user.firstName)} {capitalize(user.lastName)}
                </span>
              </div>
            </NavLink>

            <button
              onClick={logoutUser}
              disabled={loading}
              className={`${loading ? 'cursor-not-allowed' : 'px-4 py-2 border border-[#BA68C8] bg-white text-[#BA68C8] rounded-lg font-medium hover:bg-[#BA68C8] hover:text-white transition flex items-center gap-2'} `}
            >
              Logout
            </button>
          </div>


        ) : (
          <>
            <NavLink to="/login">
              <button className="btn btn-pink-500 text-[#BA68C8] hover:opacity-1000 flex items-center gap-2 bg-white border-[#BA68C8]">
                Login
              </button>
            </NavLink>

            <NavLink to="/signup">
              <button className="btn btn-pink-500 text-[#BA68C8] hover:opacity-1000 flex items-center gap-2 bg-white border-[#BA68C8]">
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
