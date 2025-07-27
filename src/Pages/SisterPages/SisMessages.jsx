import React from 'react'
import SisterDashboard from './SisterDashboard'
import DashboardStructure from './DashboardStructure'

const SisMessages = () => {
  return (
    <>
        <div className='bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem] '>
      <h3 className='text-2xl py-2 font-medium text-gray-700'>All messages from your mentees</h3>

          <h3 className='text-[1.2rem] items-center font-medium my-2'>5 messages waiting...</h3>

          <div className='bg-gray-50 rounded-2xl flex justify-between lg:p-4 p-2 shadow'>
            <div>
              <p>Elizabeth</p>
              <p>Nkunim hi, please i need someone to...</p>
            </div>
            <span className='font-medium mt-4 italic underline text-[#BA68C8]'>[Open Chat]</span>
          </div>

          <div className='bg-gray-50 rounded-2xl flex justify-between lg:p-4 p-2 shadow'>
            <div>
              <p>Ruth</p>
              <p>Nkunim hi, please i need someone to...</p>
            </div>
            <span className='font-medium mt-4 italic underline text-[#BA68C8]'>[Open Chat]</span>
          </div>

          <div className='bg-gray-50 shadow rounded-2xl flex justify-between lg:p-4 p-2'>
            <div>
              <p>Ruth</p>
              <p>Nkunim hi, please i need someone to...</p>
            </div>
            <span className='font-medium mt-4 italic underline text-[#BA68C8]'>[Open Chat]</span>
          </div>

          <div className='bg-gray-50 shadow rounded-2xl flex justify-between lg:p-4 p-2'>
            <div>
              <p>Ruth</p>
              <p>Nkunim hi, please i need someone to...</p>
            </div>
            <span className='font-medium mt-4 italic underline text-[#BA68C8]'>[Open Chat]</span>
          </div>

        </div>
 
 
    </>
  )
}

export default SisMessages