import React, { useState } from 'react'
import reset from '../../assets/images/rest.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import api from '../../config/axios';
import toast from 'react-hot-toast';

const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const { token } = useParams()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post(`/auth/resetPassword/${token}`, { password, confirmPassword });
      if (res.data.success) {
        console.log(res.data)
        setLoading(false)
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error)
      setLoading(false)
      // toast.error(res.data.message)
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden ">

          {/* left Side */}
          <div className="lg:w-1/2 p-6  w-full">
            <div><span className="font-bold mb-2 text-gray-700">Sister Sister</span></div>
            <div className='flex items-center justify-center'>
              <img src={reset} alt="login svg" />
            </div>

          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 flex text-gray-700 w-full mt-10">

            <div>
              <p className="mb-4 text-3xl font-medium lg:mt-10">Enter your new password</p>
              <form onSubmit={handleSubmit}>

                <label className="text-sm mb-1" htmlFor="email">Enter password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                />

                <label className="text-sm mb-1" htmlFor="password">Confirm password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
                />

                <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                  <button className='cursor-pointer' type='submit'>Click to reset</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default ResetPassword