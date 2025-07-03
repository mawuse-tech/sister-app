import React from 'react'
import SignupStructure from './SignupStructure'

const LoginPage = () => {
  return (
     <>
      <SignupStructure titleone="Welcome Back" titletwo=" Join as a sister Help a sister" desription="Support young women by offering a listening ear and guidance">
        <form action="">

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
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 "
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
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-2xl bg-[#5651AB] border-none">Login</button>
          <div className='text-black py-2'>
            <p>Don't have an account yet?</p>
            <p><a href="">Sign up</a></p>
          </div>
        </form>
      </SignupStructure>
    </>
  )
}

export default LoginPage