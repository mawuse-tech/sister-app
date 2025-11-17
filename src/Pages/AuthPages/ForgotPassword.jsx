import React, { useState } from "react";
import forgot from "../../assets/images/Forgot.png";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrormessage(null);

    try {
      const res = await api.post("/auth/forgotPassword", { email });
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setErrormessage(error.response?.data?.message || "Something went wrong");
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl rounded-xl border border-gray-600 flex flex-col lg:flex-row overflow-hidden mx-6 py-3">
        {/* Left Side */}
        <div className="lg:w-1/2 p-6 w-full">

          <div className="flex items-center justify-center">
            <img src={forgot} alt="Forgot password illustration" />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-6 flex text-gray-700 w-full mt-10 text-base">
          <div>
            <p className="mb-4 text-3xl font-medium lg:w-[25rem] md:w-[25rem] lg:mt-10">
              Enter your email to <br /> receive a link
            </p>

            <form onSubmit={handleSubmit}>
              {errormessage && (
                <p className="text-red-500 text-sm">{errormessage}</p>
              )}

              <label className="text-base mb-1" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrormessage(null); // clear local error on typing
                }}
                className="input border border-gray-200 w-full mb-4 text-gray-700 bg-white px-4 py-3 rounded"
                required
              />

              <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex justify-center items-center w-full h-full
                      ${loading ? "cursor-not-allowed  pointer-events-none" : "cursor-pointer"}
                      `}
                >
                  {loading ? "Sending Email..." : "Send Email"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
