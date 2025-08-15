import React from 'react';
import signup from '../../assets/images/sign3.png'


const SignupSister = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden ">

          {/* left Side */}
          <div className="lg:w-1/2 p-6  w-full">
            <div><span className="font-bold mb-2 text-gray-700">Sister Sister</span></div>
            <div className='flex items-center justify-center'>
              <img className='lg:h-[30rem]' src={signup} alt="sign up svg" />
            </div>

          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 lg:pl-0 lg:pr-6 flex text-gray-700 w-full">

            <div>
              <p className="mb-4 text-3xl font-medium">Create an Account</p>
              <p className="text-sm mb-4">Please enter your details</p>

              <div className='flex gap-2'>
                <div> <label className="text-sm mb-1" htmlFor="email">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                  /></div>

                <div>
                  <label className="text-sm mb-1" htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
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
                    className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm mb-1" htmlFor="password">Profession</label>
                  <input
                    type="text"
                    placeholder="Enter your proffession"
                    className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
                  />
                </div>
              </div>

              <div className='mt-2'>
                <label className="text-sm mb-1" htmlFor="about">Your Bio</label>
                <textarea
                  id="about"
                  className="textarea textarea-bordered border border-gray-500 w-full text-gray-700 bg-white"
                  rows="4"
                  placeholder="Write something about yourself..."
                ></textarea>
              </div>

              <div className='flex gap-2 mt-2'>
                <div> <label className="text-sm mb-1" htmlFor="email">Upload your Image</label>
                  <input
                    id="file"
                    type="file"
                    className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                  /></div>

                <div>
                  <label className="text-sm mb-1" htmlFor="email">Upload your Lincence</label>
                  <input
                    id="file"
                    type="file"
                    className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm mb-1" htmlFor="email">LinkedIn Link</label>
                  <input
                    id="social"
                    type="text"
                    className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                    placeholder='optional'
                  />
                </div>
              </div>

              <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                <button className='cursor-pointer'>Sign Up</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default SignupSister