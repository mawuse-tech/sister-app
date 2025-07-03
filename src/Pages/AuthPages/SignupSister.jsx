import React from 'react'
import SignupStructure from './SignupStructure'

const SignupSister = () => {
  return (
    <>
      <SignupStructure titleone="Create An Account to Join" titletwo=" Join as a sister Help a sister" desription="Support young women by offering a listening ear and guidance">
        <form action="">
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              What is your name?
            </label>
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email
            </label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Enter a password
            </label>
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="password"
                type="password"
                placeholder="Type here"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
              Your bio
            </label>
            <textarea
              id="bio"
              placeholder="Bio"
              className="textarea textarea-bordered h-24 w-full bg-[#eaebff] text-gray-800 placeholder-gray-400"
            ></textarea>
            <div className="text-sm text-gray-500 mt-1">Optional</div>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              Upload your image
            </label>
            <div className="flex items-center gap-2 p-3 bg-[#F8E9FE] rounded-full shadow-sm">
              <input
                id="file"
                type="file"
                className=" outline-none bg-transparent text-gray-800 placeholder-gray-400 w-full max-w-md"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-2xl bg-[#5651AB] border-none">Sign Up</button>

        </form>
      </SignupStructure>
    </>
  )
}

export default SignupSister