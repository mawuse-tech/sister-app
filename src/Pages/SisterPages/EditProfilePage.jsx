import React, { useEffect, useState } from 'react'
import DashboardStructure from '../../LayoutPage/DashboardStructure'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../config/axios';
import toast from 'react-hot-toast';
import { isUserLoggedIn } from '../../redux-store/features/users/userThunks';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const user = useSelector((state) => state.isUserLoggedIn);
  //  console.log('-----------', user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    proffession: "",
    linkedInLink: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.user.firstName || "",
        lastName: user.user.lastName || "",
        email: user.user.email || "",
        bio: user.user.bio || "",
        proffession: user.user.proffession || "",
        linkedInLink: user.user.linkedInLink || ""
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/updateProfile', formData)
      console.log('.............', response.data)

      if (response.data) {
        console.log(response.data)
        toast.success(response.data.message)

        dispatch(isUserLoggedIn())
        navigate('/sisdash')
        return response.data
      }
      

    } catch (error) {
      console.log(error)
     toast.error(error.response?.data?.message || "Something went wrong");
    }


  };

  return (
    <>
      <div className='bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem]'>
        <h3 className='text-2xl py-2 font-medium text-gray-700'>Edit Profile</h3>
        <div>
          {/* <p className="text-sm mb-4">Please enter your details</p> */}

          <form onSubmit={handleSubmit}>
            <div className='flex gap-2'>
              <div> <label className="text-sm mb-1" htmlFor="email">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>

              <div> <label className="text-sm mb-1" htmlFor="email">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>
            </div>

            <div className='flex gap-2'>

              <div>
                <label className="text-sm mb-1" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="password">Profession</label>
                <input
                  type="text"
                  value={formData.proffession}
                  onChange={(e) => setFormData({ ...formData, proffession: e.target.value })}
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
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
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
                  id="linkedInLink"
                  type="text"
                  value={formData.linkedInLink}
                  onChange={(e) => setFormData({ ...formData, linkedInLink: e.target.value })}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

            </div>

            <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
              <button className='cursor-pointer'>Click to Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProfilePage