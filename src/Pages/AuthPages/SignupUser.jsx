import React from 'react'
import SignupStructure from './SignupStructure'

const SignupUser = () => {
  return (
    <>
      <SignupStructure titleone="Create An Account to Join" titletwo=" Find a sister to chat with" maintit="Sign Up" desription="Support young women by offering a listening ear and guidance">
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

          {/* Submit */}
          <button className="btn bg-[#5651AB] border-none px-7">Sign up</button>

        </form>
      </SignupStructure>
    </>
  )
}

export default SignupUser