import React from 'react'
import { FiMail, FiMap, FiPhone, FiSearch, FiSend, FiVideo } from 'react-icons/fi'
import { MdCheckCircle, MdDashboard, MdEdit, MdHistory, MdLogout, MdMessage, MdSettings } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import lawyer from '../assets/images/testi.png';
import onek from '../assets/images/onek.png';
import { sisterData } from '../Pages/UserPages/ViewAllSisters';

const ChatLayout = () => {
    return (
        <>
            <div className="bg-[#f7f0f8] min-h-screen">
                <div className='flex justify-center'>

                    <div className="drawer lg:drawer-open bg-white rounded-3xl shadow-md overflow-hidden lg:w-[70rem]  my-2">

                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                        {/* Page content */}
                        <div className="drawer-content flex flex-col h-screen p-6 gap-3">
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden mb-4">
                                Open drawer
                            </label>

                            {/* Top fixed avatar div */}
                            <div className="relative w-full lg:w-[40rem] bg-[#BA68C8] p-2 flex justify-between rounded shrink-0">
                                <div className='flex gap-4'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring-white ring-offset-white ring-2">
                                            <img src={lawyer} alt="Sister Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Halle</p>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <div className='flex gap-4 border-2 p-2 rounded'>
                                        <FiPhone />
                                        <FiVideo />
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable middle content */}
                            <div className="flex-1 overflow-y-auto">
                                <div className='flex justify-center text-gray-700'>
                                    <div>
                                        <h3 className=' text-2xl py-4 font-medium'></h3>
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                            {/* Bottom fixed input */}
                            <div className="relative w-full lg:w-[40rem] shrink-0">
                                <FiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-xl" />

                                <input
                                    type="text"
                                    placeholder="Type a message"
                                    className="p-3 pl-10 pr-10 rounded bg-[#BA68C8] shadow-md outline-none w-full"
                                />

                                <FiSend className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-xl cursor-pointer" />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="drawer-side lg:sticky lg:top-0">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                            <ul className="menu min-h-screen w-60 p-4 bg-[#BA68C8] text-white rounded-l-xl flex flex-col gap-5 items-center">
                                <li className='text-2xl font-bold mt-5 text-center'>All Chats</li>

                                <div className="relative w-full">
                                    {/* Search Icon inside the input */}
                                    <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />

                                    {/* Search Input with left padding for icon */}
                                    <input
                                        type="text"
                                        placeholder="Search or start a new chat"
                                        className="p-3 pl-10 rounded bg-white text-black shadow-md outline-none w-full"
                                    />
                                </div>

                                <div className='flex flex-col gap-6'>
                                    {sisterData.map((sister) => (
                                        <div className='flex items-center gap-2'>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full ring-white ring-offset-white ring-2">
                                                    <img src={sister.image} alt="Sister Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[1rem]'>{sister.name}</p>
                                                <p>{sister.message}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className='flex items-center gap-2'>
                                    <MdLogout className='text-[1.8rem]' />
                                    <span className='text-[1.2rem]'>Logout</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatLayout