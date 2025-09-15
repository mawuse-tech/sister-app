import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import lawyer from "../../assets/images/teacher.jpg";
import { FiMessageCircle, FiUsers, FiHeart } from "react-icons/fi";

const UserDashboard = () => {
  const { user } = useSelector((store) => store.isUserLoggedIn);

  return (
    <div className="bg-[#f7f0f8] min-h-screen flex justify-center p-6 text-gray-700">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-md p-8 space-y-8">

        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Welcome, <span className="text-[#BA68C8]">{user?.firstName}</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We’re glad to have you back. Here’s what’s happening:
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Chats */}
          <div className="bg-[#f1d7f5] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <FiMessageCircle className="text-[#BA68C8]" /> Recent Chats
            </h3>


            <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-3 shadow">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full ring-2 ring-[#BA68C8]">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p className="text-sm text-gray-500">Psychologist</p>
                </div>
              </div>
              <NavLink to="/chat">
                <span className="text-[#BA68C8] underline text-sm">
                  Continue
                </span>
              </NavLink>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-3 shadow">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full ring-2 ring-[#BA68C8]">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p className="text-sm text-gray-500">Psychologist</p>
                </div>
              </div>
              <NavLink to="/chat">
                <span className="text-[#BA68C8] underline text-sm">
                  Continue
                </span>
              </NavLink>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-3 shadow">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full ring-2 ring-[#BA68C8]">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p className="text-sm text-gray-500">Psychologist</p>
                </div>
              </div>
              <NavLink to="/chat">
                <span className="text-[#BA68C8] underline text-sm">
                  Continue
                </span>
              </NavLink>
            </div>
            

            <div className="text-center mt-3">
              <NavLink to="/chat">
                <span className="text-[#BA68C8] underline italic">
                  View all chats...
                </span>
              </NavLink>
            </div>
          </div>


          <div className="bg-[#BA68C8] rounded-xl p-6 text-white shadow-sm">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <FiUsers /> Sisters Directory
            </h3>


            <div className="flex items-center justify-between bg-[#a64db3] p-4 rounded-lg mb-3 shadow">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full ring-2 ring-white">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p className="text-sm">Psychologist</p>
                </div>
              </div>
              <NavLink to="/chat">
                <span className="underline text-sm">Start Chat</span>
              </NavLink>
            </div>

            <div className="text-center mt-3">
              <NavLink to="/allsisters">
                <span className="underline italic">View all sisters...</span>
              </NavLink>
            </div>

            {/* Volunteer Section */}
            <div className="bg-[#fef6fb] border border-[#BA68C8] rounded-xl p-6 shadow-md text-center">
              <h3 className="text-2xl font-semibold text-[#BA68C8] mb-2 flex items-center justify-center gap-2">
                <FiHeart /> Become a Volunteer
              </h3>
              <p className="text-gray-600 mb-4">
                Share your knowledge, support young women, and make a difference.
              </p>
              <NavLink to="/volunteer">
                <button className="px-6 py-2 bg-[#BA68C8] text-white rounded-lg shadow hover:bg-[#9c4eb0] transition">
                  Fill Volunteer Form
                </button>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
