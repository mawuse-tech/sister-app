import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <ul className="menu menu-horizontal px-1 text-purple-800 font-italic">
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
 <NavLink to ="/login"> <button className="btn btn-outline text-purple-700">Login</button>
 </NavLink>
 <NavLink to="/signup"> 
  <button className="btn btn-pink-500 text-purple-700 hover:opacity-1000 flex items-center gap-2">
    Sign Up
  </button>
  </NavLink>
</div>
    </div>
  );
};

export default Navbar;
