import React, { useState } from 'react';
import reset from '../../assets/images/rest.png';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../config/axios';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { token } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post(`/auth/resetPassword/${token}`, { password, confirmPassword });

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Reset failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl rounded-xl border border-gray-600 flex flex-col lg:flex-row overflow-hidden">

        {/* Left Side */}
        <div className="lg:w-1/2 p-6 w-full">
          <span className="font-bold mb-2 text-gray-700">Sister Sister</span>
          <div className="flex items-center justify-center">
            <img src={reset} alt="reset password illustration" />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-6 flex text-gray-700 w-full mt-10">
          <div>
            <p className="mb-4 text-3xl font-medium lg:mt-10">
              Enter your new password
            </p>
            <form onSubmit={handleSubmit}>
              
              <label className="text-sm mb-1" htmlFor="password">New Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input border border-gray-500 w-full mb-4 text-gray-700 bg-white"
                required
              />

              <label className="text-sm mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input border border-gray-500 w-full text-gray-700 bg-white"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#BA68C8] w-full flex justify-center items-center h-12 rounded-lg mt-4 text-white font-medium hover:bg-[#A95BB8] transition disabled:opacity-50"
              >
                {loading ? "Reseting..." : "Click to Reset"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;
