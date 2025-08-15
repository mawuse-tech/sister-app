import React from 'react'
import DashboardStructure from '../../LayoutPage/DashboardStructure'
import sisterone from '../../assets/images/teacher.jpg'
import { NavLink } from 'react-router-dom';

const SisterDashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl py-4 font-medium text-gray-700'>Welcome Nkunim</h3>

      <div className="flex gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center shadow-lg">
    
        <div className="avatar">
          <div className="w-36 rounded-full ring-[#BA68C8] ring-offset-[#5651AB] ring-1">
            <img src={sisterone} alt="Sister Avatar" />
          </div>
        </div>
        <div className="text-[1.1rem] flex flex-col justify-center">
          <p className="font-semibold">Nkunim Asaa Osei</p>
          <p>Psychologist</p>
          <p>Ghanaian</p>
          <p>nkunim1234@gmail.com</p>
        </div>
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