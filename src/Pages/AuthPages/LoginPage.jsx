import React from 'react';
import loginsvg from '../../assets/images/sign.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux-store/features/users/userThunks';

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function hadndleSubmit(e) {
    e.preventDefault();

    try {
      const result = await dispatch(loginUser({email, password})).unwrap();
      alert("Login successful!");

    } catch (error) {
      console.log(error)
      alert(error); // error comes from rejectWithValue
    }
  }

  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden ">

          {/* left Side */}
          <div className="lg:w-1/2 p-6  w-full">
            <div><span className="font-bold mb-2 text-gray-700">Sister Sister</span></div>
            <div className='flex items-center justify-center'>
              <img src={loginsvg} alt="login svg" />
            </div>

          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 flex text-gray-700 w-full mt-10">

            <div>
              <p className="mb-4 text-3xl font-medium">Welcome Back</p>
              <p className="text-sm mb-4">Please enter your details</p>

              <form action="" onSubmit={hadndleSubmit}>
                
              <label className="text-sm mb-1" htmlFor="email">Email address</label>
              <input
                id="email"
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
              />

              <label className="text-sm mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
              />

              <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                <button className='cursor-pointer' type='submit'>Sign In</button>
              </div>
              </form>

              <p className='text-gray-600 mt-1 text-sm'>Don't have an account? <span className='text-[#BA68C8] underline italic'>Sign up</span></p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default LoginPage