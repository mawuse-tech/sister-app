import React, { useEffect, useState } from 'react'
import DashboardStructure from '../../LayoutPage/DashboardStructure'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../config/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updatedVolunteerData } from '../../redux-store/features/users/userLoggedInSlice';

const EditProfilePage = () => {
  const user = useSelector((state) => state.isUserLoggedIn);
  // console.log('-----------', user)
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [profilePic, setProfilePic] = useState(null)
  const [lincense, setLincense] = useState([])
  const [preview, setPreview] = useState(null)
  const [linkedInLink, setLinkedInLink] = useState('')
  const [proffession, setProffession] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    if (user) {
      setFirstName(user.user.firstName || "");
      setLastName(user.user.lastName || "");
      setEmail(user.user.email || "");
      setBio(user.user.bio || "");
      setProffession(user.user.proffession || "");
      setLinkedInLink(user.user.linkedInLink || "");
      setLincense(user.user.lincense || []);
      setProfilePic(user.user.profilePic || null);
    }
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData()
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email)
    formData.append("linkedInLink", linkedInLink);
    formData.append("proffession", proffession);
    formData.append("bio", bio);

    lincense.forEach((file) => {
      formData.append("lincense", file);
    });

    formData.append("profilePic", profilePic);

    try {
      const response = await api.post('/updateProfile', formData)
        // console.log('.............', response.data)

      if (response.data) {
        // console.log(response.data)
        toast.success(response.data.message)

        dispatch(updatedVolunteerData(response.data.user))

        navigate('/sisdash')
        return response.data
      }


    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong");
    }finally{
      setLoading(false)
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
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>

              <div> <label className="text-sm mb-1" htmlFor="email">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>
            </div>

            <div className='flex gap-2'>

              <div>
                <label className="text-sm mb-1" htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="password">Profession</label>
                <input
                  name="proffession"
                  type="text"
                  value={proffession}
                  onChange={(e) => setProffession(e.target.value)}
                  className="input border-1 border-gray-500 w-full text-black bg-white"
                />
              </div>
            </div>

            <div className='mt-2'>
              <label className="text-sm mb-1" htmlFor="about">Your Bio</label>
              <textarea
                name="bio"
                className="textarea textarea-bordered border border-gray-500 w-full text-black bg-white"
                rows="4"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <div className='flex gap-2 mt-2'>
              <div> <label className="text-sm mb-1" htmlFor="email">Upload your Image</label>
                <input
                  type="file"
                  name='profilePic'
                  accept="image/*"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0]
                    // console.log('-----', selectedFile)
                    setProfilePic(selectedFile)
                    // setPreview(URL.createObjectURL(selectedFile))
                  }}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                /></div>

              <div>
                <label className="text-sm mb-1" htmlFor="email">Upload your Licence</label>
                <input
                  type="file"
                  name='lincense'
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(e) => {
                    const newFiles = Array.from(e.target.files); // newly selected files
                    setLincense(prev => [...prev, ...newFiles]);  // merge with previous files
                  }}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="email">LinkedIn Link</label>
                <input
                  name="linkedInLink"
                  type="text"
                  value={linkedInLink}
                  onChange={(e) => setLinkedInLink(e.target.value)}
                  className="input border-1 border-gray-500 w-full mb-4 text-black bg-white"
                />
              </div>

            </div>

            <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
             <button
                    type="submit"
                    disabled={loading}
                    className={` flex justify-center items-center ${loading ? "cursor-not-allowed" : "bg-[#BA68C8] cursor-pointer"
                      }`}
                  >
                    Click to update
                  </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProfilePage