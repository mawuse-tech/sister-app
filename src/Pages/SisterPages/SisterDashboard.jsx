import React, { useEffect } from 'react'
import DashboardStructure from '../../LayoutPage/DashboardStructure'
import sisterone from '../../assets/images/teacher.jpg'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from 'react-icons/fi';
import { isUserLoggedIn} from '../../redux-store/features/users/userThunks';

const SisterDashboard = () => {

  // const dispatch = useDispatch()

  const {user } = useSelector((store) => store.isUserLoggedIn)

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl py-4 px-4 font-medium text-gray-700'>Welcome {capitalize(user?.firstName)}</h3>

      <div className="flex gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center shadow-lg">

        <div className="avatar">
          <div className="w-24 md:w-32 lg:w-36 rounded-full ring-[#BA68C8] ring-offset-[#5651AB] ring-1">
            <img src={`http://localhost:8000/${user.profilePic}`} alt="Sister Avatar" />
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

      <div className="gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center shadow-lg">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <FiUser className="text-[#BA68C8] text-xl" />
          <h2 className="text-lg font-semibold text-gray-800">About</h2>
        </div>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed text-sm">
          {user?.bio}
        </p>
      </div>

      <div className='bg-white rounded-2xl p-4 flex flex-col gap-3'>
        <h3 className='text-[1.2rem] font-medium my-2'>5 messages waiting...</h3>

        <div className='bg-[#BA68C8] text-white rounded-2xl flex justify-between lg:p-4 p-2'>
          <div>
            <p>Elizabeth</p>
            <p>Nkunim hi, please I need someone to...</p>
          </div>
          <span className='font-medium mt-4 italic underline'>[Open Chat]</span>
        </div>

        <div className='bg-[#BA68C8] text-white rounded-2xl flex justify-between lg:p-4 p-2'>
          <div>
            <p>Ruth</p>
            <p>Nkunim hi, please I need someone to...</p>
          </div>
          <p className='font-medium mt-4 italic underline'>[Open Chat]</p>
        </div>
      </div>

      <NavLink to="/sisdash/sismessage">
        <span className='font-medium italic underline text-[#BA68C8] mb-4 self-center'>[View all messages...]</span>
      </NavLink>
    </div>
  );
}

export default SisterDashboard