import React from 'react'
import DashboardStructure from './DashboardStructure'

const EditProfilePage = () => {
  return (
    <>
      <DashboardStructure title="Edit Profile">
        <div className='bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem]'>
          <form action="">
          {/* Name */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="name"
                type="text"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#eaebff] rounded-full shadow-sm">
              <input
                id="email"
                type="email"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="password"
                type="password"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#eaebff] rounded-full shadow-sm">
              <input
                id="text"
                type="text"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="text"
                type="text"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <textarea
              id="bio"
              placeholder="Bio"
              className="textarea textarea-bordered h-24 w-full bg-[#eaebff] text-gray-800 placeholder-gray-400"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="file"
                type="file"
                className=" outline-none bg-transparent text-gray-800 placeholder-gray-400 w-full max-w-md"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="btn bg-[#5651AB] border-none px-7">Save</button>

        </form>
        </div>
      </DashboardStructure>
    </>
  )
}

export default EditProfilePage