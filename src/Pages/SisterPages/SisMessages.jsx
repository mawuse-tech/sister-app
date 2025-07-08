import React from 'react'
import SisterDashboard from './SisterDashboard'
import DashboardStructure from './DashboardStructure'

const SisMessages = () => {
  return (
    <>
      <DashboardStructure title="All messages from your mentees">

        <div className='bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem] '>
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

          <div className='bg-[#EAEBFF] rounded-2xl text-[#5651AB] flex justify-between lg:p-4 p-2'>
            <div>
              <p>Ruth</p>
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

          <div className='bg-[#EAEBFF] rounded-2xl text-[#5651AB] flex justify-between lg:p-4 p-2'>
            <div>
              <p>Ruth</p>
              <p>Nkunim hi, please i need someone to...</p>
            </div>
            <p className='font-medium mt-4'>[Open Chat]</p>
          </div>

        </div>
      </DashboardStructure>
    </>
  )
}

export default SisMessages