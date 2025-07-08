import React, { Children } from 'react'
import { MdCheckCircle, MdDashboard, MdEdit, MdHistory, MdMessage, MdSettings } from 'react-icons/md'
const DashboardStructure = ({title, children }) => {
  return (
    <>
      <div className="drawer lg:drawer-open bg-[#DFEBFB] min-h-screen">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          {/* Page content here */}
          <div className='flex justify-center'>

            <div>
              <h3 className='text-[#5651AB] text-2xl items-center py-4 font-medium'>{title}</h3>
              {children}
            </div>

          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu text-base-content min-h-full w-80 p-4 bg-[#5651AB] flex flex-col gap-16">
            {/* Sidebar content here */}
            <li className='text-3xl font-bold mt-3 items-center'>Your Dashboard</li>
            <div className='flex flex-col gap-6 '>
              <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdDashboard/></span><li className='text-[1.2rem] items-center'>Dashboard</li>
              </div>
              
              <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdMessage/></span><li className='text-[1.2rem] items-center'>Messages</li>
              </div>

             <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdCheckCircle/></span><li className='text-[1.2rem] items-center'>Availability</li>
              </div>

             <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdEdit/></span><li className='text-[1.2rem] items-center'>Edit Profile</li>
              </div>

             <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdHistory/></span><li className='text-[1.2rem] items-center'>Chat History</li>
              </div>

             <div className='flex justify-center gap-1.5'><span className='text-[1.8rem]'><MdSettings/></span><li className='text-[1.2rem] items-center'>Settings</li>
              </div>
            </div>

            <li className='items-center'><span className=' font-bold text-[1.2rem]'>Logout</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardStructure