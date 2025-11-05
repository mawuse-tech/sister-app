import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import api from "../../config/axios";
import { recentChatFunc } from "../../redux-store/features/users/userThunks";

const SisterDashboard = () => {
  const { user } = useSelector((store) => store.isUserLoggedIn);
  const { recentChat } = useSelector((store) => store.recentChatData);
  console.log('hi', recentChat)
  const dispatch = useDispatch()
  // const [recentChats, setRecentChats] = useState([]);

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl py-4 px-4 font-medium text-gray-700">
        Welcome {capitalize(user?.firstName)}
      </h3>

      {/* Profile Card */}
      <div className="flex gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center shadow-lg">
        <div className="avatar">
          <div className="w-24 md:w-32 lg:w-36 rounded-full ring-[#BA68C8] ring-offset-[#5651AB] ring-1">
            <img
              src={`http://localhost:8000/${user.profilePic}`}
              alt="Sister Avatar"
            />
          </div>
        </div>
        <div className="text-[1.1rem] flex flex-col justify-center">
          <p className="font-semibold">
            {capitalize(user?.firstName)} {capitalize(user?.lastName)}
          </p>
          <p>{capitalize(user?.proffession)}</p>
          {user?.linkedInLink && (
            <a
              href={user?.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BA68C8] hover:underline font-medium"
            >
              My LinkedIn
            </a>
          )}
          <p>{user?.email}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <FiUser className="text-[#BA68C8] text-xl" />
          <h2 className="text-lg font-semibold text-gray-800">About</h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">{user?.bio}</p>
      </div>
    </div>
  );
};

export default SisterDashboard;
