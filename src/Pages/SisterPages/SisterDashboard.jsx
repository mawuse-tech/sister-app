import React from 'react'
import DashboardStructure from './DashboardStructure'
import sisterone from '../../assets/images/teacher.jpg'

const SisterDashboard = () => {
  return (
    <>
      <DashboardStructure title="Welcome Nkunim">
        <div className='flex flex-col gap-6'>
          <div className="flex gap-10 bg-white w-full lg:w-[38rem] rounded-2xl p-4 items-center">
            {/* Avatar Image */}
            <div className="avatar">
              <div className="w-36 rounded-full ring-[#5651AB] ring-offset-[#5651AB] ring-4">
                <img src={sisterone} alt="Sister Avatar" />
              </div>
            </div>

            {/* Avatar Details */}
            <div className="text-[#5651AB] text-[1.1rem] flex flex-col justify-center">
              <p className="font-semibold">Nkunim Asaa Osei</p>
              <p>Psychologist</p>
              <p>Ghanaian</p>
              <p>nkunim1234@gmail.com</p>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-4 flex flex-col gap-3'>
            <h3 className='text-[#5651AB] text-[1.2rem] items-center font-medium my-2'>5 messages waiting...</h3>

            <div className='bg-[#EAEBFF] rounded-2xl text-[#5651AB] flex justify-between lg:p-4 p-2'>
              <div>
                <p>Elizabeth</p>
                <p>Nkunim hi, please i need someone to...</p>
              </div>
              <p className='font-medium mt-4'>[Open Chat]</p>
            </div>

            <div className='bg-[#F8E9FE] rounded-2xl text-[#5651AB] flex justify-between lg:p-4 p-2'>
              <div>
                <p>Ruth</p>
                <p>Nkunim hi, please i need someone to...</p>
              </div>
              <p className='font-medium mt-4'>[Open Chat]</p>
            </div>
          </div>

          <p className='font-medium  text-[#5651AB] items-center'>[View all messages...]</p>

        </div>
      </DashboardStructure>
    </>
  )
}

export default SisterDashboard