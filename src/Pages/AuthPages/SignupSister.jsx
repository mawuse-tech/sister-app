import React, { useState } from 'react';
import signup from '../../assets/images/sign3.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn, volunteer } from '../../redux-store/features/users/userThunks';
import toast from 'react-hot-toast';
import { setError } from '../../redux-store/features/users/volunteerSlice';

const SignupSister = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, loading, volunteerState } = useSelector((store) => store.volunteerDetails)

  const [profilePic, setProfilePic] = useState(null)
  const [lincense, setLincense] = useState([])
  const [preview, setPreview] = useState(null)
  const [linkedInLink, setLinkedInLink] = useState('')
  const [proffession, setProffession] = useState('')
  const [bio, setBio] = useState('')

  const handleVolunteerForm = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("linkedInLink", linkedInLink);
    formData.append("proffession", proffession);
    formData.append("bio", bio);

    lincense.forEach((file) => {
      formData.append("lincense", file);
    });

    formData.append("profilePic", profilePic);

    try {
      const response = await dispatch(volunteer(formData)).unwrap()
      console.log('...........', response.message)

      dispatch(isUserLoggedIn())

      if (response.success === true) {
        toast.success(response.message)
        navigate('/sisdash')
      }
    } catch (error) {
      console.log('=========', error.message)
      toast.error(error.message)
    }

  }

  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden mx-6 py-3">

          {/* left Side */}
          <div className="lg:w-1/2 w-full">
            <div className='flex items-center justify-center'>
              <img className='lg:h-[30rem]' src={signup} alt="sign up svg" />
            </div>

          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 lg:pl-0 lg:pr-6 flex text-gray-700 text-base w-full">

            <div>
              <p className="mb-4 text-3xl font-medium">Provide your details</p>
              {error && <p className="text-red-500 text-sm">{error.message}</p>}

              <form onSubmit={handleVolunteerForm}>

                <div className='flex gap-2'>
                  <div>
                    <label className="text-base mb-1" htmlFor="email">LinkedIn Link</label>
                    <input
                      type="text"
                      name='linkedInLink'
                      value={linkedInLink}
                      onChange={(e) => {
                        setLinkedInLink(e.target.value);
                        if (error) dispatch(setError(null)); // clear redux error
                      }}
                      className="input border-1 border-gray-200 w-full mb-4 text-gray-700 bg-white"
                      placeholder='optional'
                    />
                  </div>

                  <div>
                    <label className="text-base mb-1" htmlFor="password">Profession</label>
                    <input
                      type="text"
                      name='proffession'
                      value={proffession}
                      onChange={(e) => {
                        setProffession(e.target.value);
                        if (error) dispatch(setError(null)); // clear redux error
                      }}
                      placeholder="Enter your proffession"
                      className="input border-1 border-gray-200 w-full text-gray-700 bg-white"
                    />
                  </div>
                </div>

                <div className='mt-2'>
                  <label className="text-base mb-1" htmlFor="about">Your Bio</label>
                  <textarea
                    name='bio'
                    minLength={50}     // minimum 50 characters
                    value={bio}
                    onChange={(e) => {
                      setBio(e.target.value);
                      if (error) dispatch(setError(null)); // clear redux error
                    }}
                    className="textarea textarea-bordered border border-gray-200 w-full text-gray-700 bg-white"
                    rows="4"
                    placeholder="Write something about yourself..."
                  ></textarea>
                </div>

                <div className='flex gap-2 mt-2'>
                  <div> <label className="text-base mb-1" htmlFor="email">Upload your Image</label>
                    <input
                      type="file"
                      name='profilePic'
                      accept="image/*"
                      onChange={(e) => {
                        const selectedFile = e.target.files[0]
                        // console.log('-----', selectedFile)
                        setProfilePic(selectedFile);
                         if (error) dispatch(setError(null));
                        // setPreview(URL.createObjectURL(selectedFile))
                      }}
                      className="input border-1 border-gray-200 w-full mb-4 text-gray-700 bg-white"
                    /></div>

                  <div>
                    <label className="text-base mb-1" htmlFor="email">Upload Lincence</label>
                    <input
                      id="file"
                      type="file"
                      name="lincense"
                      accept=".pdf,.doc,.docx"
                      multiple
                      onChange={(e) => {
                        const newFiles = Array.from(e.target.files); // newly selected files
                        setLincense(prev => [...prev, ...newFiles]);  // merge with previous files
                         if (error) dispatch(setError(null));
                      }}
                      className="input border border-gray-200 w-full mb-4 text-gray-700 bg-white px-4 py-3 rounded"
                    />

                  </div>
                </div>

               <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex justify-center items-center w-full h-full
                      ${loading ? "cursor-not-allowed  pointer-events-none" : "cursor-pointer"}
                      `}
                  >
                    {loading ? "Submiting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default SignupSister