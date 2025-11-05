import toast from 'react-hot-toast'
import React, { Children, useState } from 'react'
import { MdCheckCircle, MdDashboard, MdEdit, MdHistory, MdLogout, MdMessage, MdSettings } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { isUserLoggedIn, quitVolunteering } from '../redux-store/features/users/userThunks'
import { updatedVolunteerData } from '../redux-store/features/users/userLoggedInSlice'
import Modal from '../Pages/SharedComponentsPages/Modal'


const DashboardStructure = ({ title, }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, loading } = useSelector((store) => store.quitVolunteer)
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");

  async function handleQuitVolunteer(e) {
    e.preventDefault();
    try {

      const response = await dispatch(quitVolunteering({ reason })).unwrap();
      console.log(response)

      if (response.success === true) {
        toast.success(response.message);

        dispatch(isUserLoggedIn())
        navigate('/userdash')
      };

      setOpen(false)

    } catch (error) {
      console.log(error)
      toast.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#f7f0f8] min-h-screen ">

        {/* modal */}
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Can you kindly let us know why you want to quit? or quit anyways."
        >
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Optional: Share your reason..."
            className="w-full border-1 border-gray-300 rounded-md p-2 mb-3"
          />
          <button
            onClick={handleQuitVolunteer}
            className="bg-white text-red-500 px-4 py-2 rounded-md w-full font-medium cursor-pointer"
          >
            Quit
          </button>
        </Modal>

        <div className='flex justify-center'>

          <div className="drawer lg:drawer-open bg-white rounded-3xl shadow-md overflow-hidden lg:w-[70rem]  my-2">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content overflow-y-auto max-h-screen p-6">
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden mb-4 bg-[#a64db3] border-0">
                Open drawer
              </label>

              <div className='flex justify-center text-gray-700'>
                <div>
                  <h3 className=' text-2xl py-4 font-medium'>{title}</h3>
                  <Outlet />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side lg:sticky lg:top-0">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu min-h-screen w-60 p-4 bg-[#BA68C8] text-white rounded-l-xl flex flex-col gap-12 items-center">
                <li className='text-2xl font-bold mt-5 text-center'>Your Dashboard</li>

                <div className='flex flex-col gap-6'>

                  <NavLink to="/sisdash"
                    end
                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }
                  >
                    <div className='flex items-center gap-2'>
                      <MdDashboard className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>Dashboard</span>
                    </div>
                  </NavLink>

                  <NavLink to="/sisdash/sismessage"
                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }
                  >
                    <div className='flex items-center gap-2'>
                      <MdMessage className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>Messages</span>
                    </div>
                  </NavLink>

                  <NavLink to="/sisdash/available"

                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }>
                    <div className='flex items-center gap-2'>
                      <MdCheckCircle className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>Availability</span>
                    </div>
                  </NavLink>

                  <NavLink to="/sisdash/edit"
                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }
                  >
                    <div className='flex items-center gap-2'>
                      <MdEdit className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>Edit Profile</span>
                    </div>
                  </NavLink>

                  <NavLink to="/chatBox"
                    end
                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }
                  >
                    <div className='flex items-center gap-2'>
                      <MdHistory className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>View Chats</span>
                    </div>
                  </NavLink>

                  <NavLink to="/sisdash/"
                    end
                    className={({ isActive }) =>
                      `p-1 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"}`
                    }
                  >
                    <div className='flex items-center gap-2'>
                      <MdSettings className='text-[1.8rem]' />
                      <span className='text-[1.2rem]'>Settings</span>
                    </div>
                  </NavLink>
                </div>

                <div className='flex items-center gap-2 text-gray-800'>
                  <MdLogout className='text-[1.8rem] text-white' />
                  <button
                    disabled={loading}
                    onClick={() => setOpen(true)}
                    className={` flex justify-center items-center text-[1.2rem] ${loading ? "cursor-not-allowed" : "cursor-pointer text-white"
                      }`}
                  >Quit Volunteering
                  </button>

                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardStructure