import React from 'react'
import DashboardStructure from './DashboardStructure'

const EditProfilePage = () => {
  return (
    <>
        <div className='bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem]'>
                <h3 className='text-2xl py-2 font-medium text-gray-700'>Edit Profile</h3>
          <div>
            <p className="text-sm mb-4">Please enter your details</p>

            <div className='flex gap-2'>
              <div> <label className="text-sm mb-1" htmlFor="email">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>

              <div>
                <label className="text-sm mb-1" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>
            </div>

            <div className='flex gap-2'>
              <div>
                <label className="text-sm mb-1" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="input border-1 border-gray-500 w-full text-black bg-white"
                />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="password">Proffession</label>
                <input
                  type="text"
                  placeholder="Enter your proffession"
                  className="input border-1 border-gray-500 w-full text-black bg-white"
                />
              </div>
            </div>

            <div className='mt-2'>
              <label className="text-sm mb-1" htmlFor="about">Your Bio</label>
              <textarea
                id="about"
                className="textarea textarea-bordered border border-gray-500 w-full text-black bg-white"
                rows="4"
                placeholder="Write something about yourself..."
              ></textarea>
            </div>

            <div className='flex gap-2 mt-2'>
              <div> <label className="text-sm mb-1" htmlFor="email">Upload your Image</label>
                <input
                  id="file"
                  type="file"
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>

              <div>
                <label className="text-sm mb-1" htmlFor="email">Upload your Lincence</label>
                <input
                  id="file"
                  type="file"
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="email">LinkedIn Link</label>
                <input
                  id="social"
                  type="text"
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                  placeholder='optional'
                />
              </div>
            </div>

            <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
              <button className='cursor-pointer'>Click to Edit</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default EditProfilePage