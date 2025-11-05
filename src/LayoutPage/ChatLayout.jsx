import React, { useEffect, useRef, useState } from 'react';
import { FiMail, FiMap, FiPhone, FiSearch, FiSend, FiVideo } from 'react-icons/fi';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import lawyer from '../assets/images/testi.png';
import { useDispatch, useSelector } from 'react-redux';
import { initSocket } from '../config/socket';
import { chatPartners } from '../redux-store/features/users/userThunks';

const ChatLayout = () => {
    const { user } = useSelector((store) => store.isUserLoggedIn);
    const { volunteers } = useSelector((store) => store.volunteers);
    const [search, setSearch] = useState("");
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socketRef = useRef(null);
    const dispatch = useDispatch();
    const { partners } = useSelector((store) => store. chatPartnersData);

    useEffect(() => {
        if (!user?._id) return;

        // Fetch chat partners globally
        dispatch(chatPartners(user._id));

        // Initialize socket
        const socket = initSocket();
        socketRef.current = socket;

        // Join user's private room
        socket.emit("join", user._id);

        // Listen for online user updates
        socket.on("updateOnlineUsers", (users) => {
            setOnlineUsers(users);
        });

        // Cleanup
        return () => {
            socket.off("updateOnlineUsers");
        };
    }, [user._id, dispatch]);


    // ✅ Helper to check if a user is online
    const isUserOnline = (id) => onlineUsers.includes(id);

    // ✅ Utility to capitalize names
    const capitalize = (str) =>
        str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

    return (
        <div className="bg-[#f7f0f8] min-h-screen">
            <div className="flex justify-center">
                <div className="drawer lg:drawer-open bg-white rounded-3xl shadow-md overflow-hidden lg:w-[70rem] my-2">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                    {/* Page content */}
                    <div className="drawer-content flex flex-col h-screen p-6 gap-3">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden mb-4">
                            Open drawer
                        </label>

                        {/* Top fixed avatar div */}
                        <div className="relative w-full lg:w-[40rem] bg-[#BA68C8] p-2 flex justify-between rounded shrink-0">
                            <div className="flex gap-4">
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring-white ring-offset-white ring-2">
                                        <img src={lawyer} alt="Sister Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <p>{partners[0] ? capitalize(partners[0].firstName) : 'Select a sister'}</p>
                                    <p className={`text-sm ${partners[0] && isUserOnline(partners[0]._id)
                                        ? "text-green-200"
                                        : "text-gray-200"}`}>
                                        {partners[0]
                                            ? isUserOnline(partners[0]._id)
                                                ? "Online"
                                                : "Offline"
                                            : ""}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 border-2 p-2 rounded">
                                    <FiPhone />
                                    <FiVideo />
                                </div>
                            </div>
                        </div>

                        {/* Scrollable middle content */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="flex justify-center text-gray-700">
                                <div>
                                    <h3 className="text-2xl py-4 font-medium"></h3>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="drawer-side lg:sticky lg:top-0">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu min-h-screen w-60 p-4 bg-[#BA68C8] text-white rounded-l-xl flex flex-col gap-5 items-center">
                            <li className="text-2xl font-bold mt-5 text-center">All Chats</li>

                            {/* Search */}
                            <div className="relative w-full">
                                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Search or start a new chat"
                                    className="p-3 pl-10 rounded bg-white text-black shadow-md outline-none w-full"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {/* Chat partners */}
                            <div className="flex flex-col gap-6">
                                {partners
                                    ?.filter((partner) =>
                                        `${partner.firstName} ${partner.lastName}`
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    )
                                    .map((partner) => (
                                        <NavLink
                                            key={partner._id}
                                            to={`/chatbox/${partner._id}`}
                                            className={({ isActive }) =>
                                                `p-1 rounded flex items-center gap-2 ${isActive
                                                    ? "bg-white text-black"
                                                    : "text-white"
                                                }`
                                            }
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="avatar relative">
                                                    <div className="w-12 rounded-full ring-white ring-offset-white ring-2">
                                                        <img
                                                            src={`http://localhost:8000/${partner?.profilePic}`}
                                                            alt="Sister Avatar"
                                                        />
                                                    </div>
                                                    {/* 🟢 Online dot */}
                                                    {isUserOnline(partner._id) && (
                                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-[1rem] font-semibold">
                                                        {capitalize(partner.firstName)} {capitalize(partner.lastName)}
                                                    </p>
                                                    <p className="text-sm text-gray-200 truncate w-[9rem]">
                                                        {partner.lastMessage || "No messages yet"}
                                                    </p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatLayout;
