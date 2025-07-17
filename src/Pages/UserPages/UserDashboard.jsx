import React from 'react'
import { FiSearch } from 'react-icons/fi'
import doctor from '../../assets/images/doctor.jpg'
import lawyer from '../../assets/images/lawyer.jpg'

const UserDashboard = () => {
  return (
    <>
      {/* Blue Header Background */}
      <div className="bg-[#5651AB] h-[20rem] lg:h-48 relative flex justify-center">
        {/* White Box Overlapping the Blue Section */}
        <div className="absolute top-3 w-full max-w-5xl bg-white rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#5651AB] p-4 shadow-md">

          {/* Title */}
          <h3 className="text-[1.4rem] font-medium">Your Dashboard</h3>

          {/* Search Input */}
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full md:max-w-md bg-gray-200">
            <FiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full bg-transparent"
            />
          </div>
          
        </div>

        <div className='absolute lg:top-28 top-48 text-center'>
          <h3 className='text-[2rem]'>Welcome Linda</h3>
          <p>We are here for you, you can talk to any sister</p>
        </div>
      </div>

      {/* Body Section */}
      <div className="bg-[#DFEBFB]  h-full pt-6 px-4 flex justify-center">

        <div className='text-[#5651AB]'>
          <div className='flex flex-col gap-3'>
            <p className='text-[1.2rem] mb-3'>Recently contacted sisters...</p>

            <div className="flex justify-between bg-white w-full lg:w-[60rem] rounded-2xl p-4 items-center">
              {/* Avatar Image */}
              <div className='flex gap-10'>
                <div className="avatar">
                  <div className="w-16 rounded-full ring-[#5651AB] ring-offset-[#5651AB] ring-2">
                    <img src={doctor} alt="Sister Avatar" />
                  </div>
                </div>

                {/* Avatar Details */}
                <div className="text-[#5651AB] text-[1.1rem] flex flex-col justify-center">
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p>Psychologist</p>
                </div>
              </div>

              <div className='text-[#5651AB]'>
                <p className='font-medium'>[Continue chat...]</p>
              </div>
            </div>

            <div className="flex justify-between bg-white w-full lg:w-[60rem] rounded-2xl p-4 items-center">
              {/* Avatar Image */}
              <div className='flex gap-10'>
                <div className="avatar">
                  <div className="w-16 rounded-full ring-[#5651AB] ring-offset-[#5651AB] ring-2">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>

                {/* Avatar Details */}
                <div className="text-[#5651AB] text-[1.1rem] flex flex-col justify-center">
                  <p className="font-semibold">Perfect Patiece Daah</p>
                  <p>Lawyer</p>
                </div>
              </div>

              <div className='text-[#5651AB]'>
                <p className='font-medium'>[Continue chat...]</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <p className='font-medium items-center'>[View all chats...]</p>
            </div>

          </div>

          
          <div className='flex flex-col gap-3'>
            <p className='text-[1.2rem] mb-3'>Explore sisters...</p>

            <div className="flex justify-between bg-white w-full lg:w-[60rem] rounded-2xl p-4 items-center">
              {/* Avatar Image */}
              <div className='flex gap-10'>
                <div className="avatar">
                  <div className="w-16 rounded-full ring-[#5651AB] ring-offset-[#5651AB] ring-2">
                    <img src={doctor} alt="Sister Avatar" />
                  </div>
                </div>

                {/* Avatar Details */}
                <div className="text-[#5651AB] text-[1.1rem] flex flex-col justify-center">
                  <p className="font-semibold">Nkunim Asaa Osei</p>
                  <p>Psychologist</p>
                </div>
              </div>

              <div className='text-[#5651AB]'>
                <p className='font-medium'>[start a chat...]</p>
              </div>
            </div>

            <div className="flex justify-between bg-white w-full lg:w-[60rem] rounded-2xl p-4 items-center">
              {/* Avatar Image */}
              <div className='flex gap-10'>
                <div className="avatar">
                  <div className="w-16 rounded-full ring-[#5651AB] ring-offset-[#5651AB] ring-2">
                    <img src={lawyer} alt="Sister Avatar" />
                  </div>
                </div>

                {/* Avatar Details */}
                <div className="text-[#5651AB] text-[1.1rem] flex flex-col justify-center">
                  <p className="font-semibold">Perfect Patiece Daah</p>
                  <p>Lawyer</p>
                </div>
              </div>

              <div className='text-[#5651AB]'>
                <p className='font-medium'>[start a chat...]</p>
              </div>
            </div>

            <div className='flex justify-center mb-10'>
              <p className='font-bold items-center'>[View all sisters...]</p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default UserDashboard