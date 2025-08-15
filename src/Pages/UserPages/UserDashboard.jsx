import React from 'react'
import { FiSearch } from 'react-icons/fi'
import lawyer from '../../assets/images/teacher.jpg';
import { NavLink } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <>
      {/* Body Section */}
      <div className="bg-[#f7f0f8] min-h-screen flex justify-center p-6 text-gray-700 ">

        <div className='bg-white w-full max-w-6xl rounded-xl flex flex-col  overflow-hidden justify-center lg:w-[70rem]  '>
          <div className='w-full p-6'>
            <div className='flex justify-center pt-10'>
              <div>
                <p className="mb-4 text-3xl font-medium items-center">Welcome Linda</p>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>

            {/* body */}
            <div className='flex flex-col gap-1'>
              <div className='flex justify-center'>
                <p className='text-[1.2rem] my-3 font-medium'>Recently contacted sisters...</p>
              </div>

              <div className='flex justify-center'>
                <div className="flex justify-around text-gray-700 bg-[#f1d7f5] w-full lg:w-2/3 rounded-2xl p-4 items-center ">
                  {/* Avatar Image */}
                  <div className='flex gap-10'>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring-white ring-offset-white ring-2">
                        <img src={lawyer} alt="Sister Avatar" />
                      </div>
                    </div>

                    {/* Avatar Details */}
                    <div className="text-[1.1rem] flex flex-col justify-center">
                      <p className="font-semibold">Nkunim Asaa Osei</p>
                      <p>Psychologist</p>
                    </div>
                  </div>

                  <div>
                    <p className='font-medium underline italic'>[Continue chat...]</p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className="flex justify-around text-gray-700 bg-[#f1d7f5] w-full lg:w-2/3 rounded-2xl p-4 items-center ">
                  {/* Avatar Image */}
                  <div className='flex gap-10'>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring-white ring-offset-white ring-2">
                        <img src={lawyer} alt="Sister Avatar" />
                      </div>
                    </div>

                    {/* Avatar Details */}
                    <div className=" text-[1.1rem] flex flex-col justify-center">
                      <p className="font-semibold">Nkunim Asaa Osei</p>
                      <p>Psychologist</p>
                    </div>
                  </div>

                  <div>
                    <p className='font-medium underline italic'>[Continue chat...]</p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
               <NavLink to="/chat">
                 <p className='font-medium items-center italic underline'>[View all chats...]</p>
               </NavLink>
              </div>

            </div>
          </div>

          <div className='flex flex-col gap-1'>
              <div className='flex justify-center'>
                <NavLink to="/allsisters">
                <p className='text-[1.2rem] my-3 font-medium border-2 rounded p-1'>View all sisters...</p>
                </NavLink>
              </div>

              <div className='flex justify-center'>
                <div className="flex justify-around text-white bg-[#BA68C8] w-full lg:w-2/3 rounded-2xl p-4 items-center ">
                  {/* Avatar Image */}
                  <div className='flex gap-10'>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring-white ring-offset-white ring-2">
                        <img src={lawyer} alt="Sister Avatar" />
                      </div>
                    </div>

                    {/* Avatar Details */}
                    <div className="text-white text-[1.1rem] flex flex-col justify-center">
                      <p className="font-semibold">Nkunim Asaa Osei</p>
                      <p>Psychologist</p>
                    </div>
                  </div>

                  <div>
                    <p className='font-medium underline italic'>[Start chat...]</p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className="flex justify-around text-white bg-[#BA68C8] w-full lg:w-2/3 rounded-2xl p-4 items-center ">
                  {/* Avatar Image */}
                  <div className='flex gap-10'>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring-white ring-offset-white ring-2">
                        <img src={lawyer} alt="Sister Avatar" />
                      </div>
                    </div>

                    {/* Avatar Details */}
                    <div className="text-white text-[1.1rem] flex flex-col justify-center">
                      <p className="font-semibold">Nkunim Asaa Osei</p>
                      <p>Psychologist</p>
                    </div>
                  </div>

                  <div>
                    <p className='font-medium underline italic'>[Start chat...]</p>
                  </div>
                </div>
              </div>

            </div>
        </div>

      </div>
    </>
  )
}

export default UserDashboard