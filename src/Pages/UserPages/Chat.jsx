import React, { useEffect, useRef, useState } from "react";
import {
  FiHome,
  FiMessageSquare,
  FiBell,
  FiSettings,
  FiVideo,
  FiPhone,
  FiMoreVertical,
  FiSend,
  FiSearch,
  FiSmile,
  FiImage,
  FiMenu,
  FiX,
  FiGrid,
  FiUser,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { chatPartners, fetchAllVolunteers } from "../../redux-store/features/users/userThunks";
import { getSocket, initSocket } from "../../config/socket";
import { NavLink, useParams } from "react-router-dom";
import {
  addMessage,
  setMessagesForReceiver,
} from "../../redux-store/features/users/chatSlice";
import api from "../../config/axios";

const ChatPage = () => {
  const { user } = useSelector((store) => store.isUserLoggedIn);
  const { volunteers } = useSelector((store) => store.volunteers);
  const [search, setSearch] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socketRef = useRef(null);
  const dispatch = useDispatch();
  const { partners } = useSelector((store) => store.chatPartnersData);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const { id: receiverId } = useParams();
  const senderId = user?._id;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chatPartnersList, setChatPartnersList] = useState([]);

  const allMessages = useSelector((store) => store.chat.messages);
  const messages = allMessages[receiverId] || [];
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef(null);

  // --- Fetch chat partners + initialize socket ---
  useEffect(() => {
    if (!user?._id) return;

    const fetchData = async () => {
      try {
        // Fetch chat partners first
        const partnersData = await dispatch(chatPartners(user._id)).unwrap();

        // 2️⃣ Check role: If user is a volunteer, show only chat partners
        if (user.isVolunteer) {
          setChatPartnersList(partnersData);
          return;
        }

        // 3️⃣ Otherwise (if sister), fetch all volunteers
        const allVolunteersResponse = await dispatch(fetchAllVolunteers()).unwrap();
        const allVolunteersData = Array.isArray(allVolunteersResponse)
          ? allVolunteersResponse
          : allVolunteersResponse.volunteers || [];

        // 4️⃣ Filter out volunteers who are already partners
        const partnerIds = new Set(partnersData.map((p) => p._id));
        const nonPartners = allVolunteersData.filter(
          (volunteer) => !partnerIds.has(volunteer._id)
        );

        // 5️⃣ Combine — partners first, then others
        const combinedList = [...partnersData, ...nonPartners];
        setChatPartnersList(combinedList);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchData();

    // 6️⃣ Socket setup
    const socket = initSocket();
    socketRef.current = socket;

    socket.emit("join", user._id);
    socket.on("updateOnlineUsers", (users) => setOnlineUsers(users));

    // 7️⃣ Cleanup
    return () => {
      socket.off("updateOnlineUsers");
    };
  }, [user?._id, user?.role, dispatch]);

  const { id } = useParams();

  useEffect(() => {
    if (!id || (!partners?.length && !volunteers?.length)) return;

    // Try to find the selected partner in both arrays
    const selected =
      partners.find((p) => p._id === id) ||
      volunteers.find((v) => v._id === id);

    if (selected) {
      setSelectedPartner(selected);

    }
  }, [id, partners, volunteers, user._id, dispatch]);



  const isUserOnline = (id) => onlineUsers.includes(id);

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  // --- Fetch chat history when a receiver is selected ---
  useEffect(() => {
    if (!senderId || !receiverId) return;
    const fetchHistory = async () => {
      try {
        const res = await api.get(`/chats/${senderId}/${receiverId}`);
        dispatch(
          setMessagesForReceiver({ receiverId, messages: res.data || [] })
        );
        scrollToBottom();
      } catch (err) {
        console.error("Failed to fetch chat history", err);
      }
    };
    fetchHistory();
  }, [senderId, receiverId, dispatch]);

  // --- Handle receiving new messages ---
  useEffect(() => {
    if (!senderId) return;
    const socket = initSocket();
    socketRef.current = socket;

    socket.emit("join", senderId);

    const handleReceive = (msg) => {
      const msgSender = String(msg.senderId || msg.sender);
      const msgReceiver = String(msg.receiverId || msg.receiver);
      const isRelated =
        (msgSender === String(senderId) &&
          msgReceiver === String(receiverId)) ||
        (msgSender === String(receiverId) &&
          msgReceiver === String(senderId));

      // Avoid duplicates — only add if it's from receiver
      if (isRelated && msgSender !== String(senderId)) {
        dispatch(addMessage({ receiverId, message: msg }));
        scrollToBottom();
      }
    };

    socket.on("receiveMessage", handleReceive);
    return () => socket.off("receiveMessage", handleReceive);
  }, [senderId, receiverId, dispatch]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // --- Send message ---
  const sendMessage = async () => {
    if (!newMessage.trim() || !senderId || !receiverId) return;

    const payload = {
      senderId, receiverId, message: newMessage.trim(),
      createdAt: new Date().toDateString()
    };

    // Show immediately
    dispatch(addMessage({ receiverId, message: payload }));

    setNewMessage("");
    scrollToBottom();

    const socket = getSocket();
    if (socket) socket.emit("sendMessage", payload);
  };

  return (
    <div className="flex h-screen bg-[#f2f6ff] overflow-hidden relative">
      {/* BLUE SIDEBAR */}
      <div className="w-20 md:w-24 bg-[#BA68C8] flex flex-col items-center py-6 space-y-6 text-white">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-[#6a00ff] bg-white p-2 rounded-md shadow-md md:hidden"
        >
          <FiMenu size={20} />
        </button>
        <div className="flex flex-col items-center space-y-8">
          <NavLink to='/'> <FiHome size={24} /></NavLink>
          <NavLink to='/userdash'>
            <FiGrid
              size={24}
              className="cursor-pointer bg-white text-[#BA68C8] p-1 rounded-md"
            />
          </NavLink>
          <NavLink to='/allsisters'>
            <FiUser size={24} />
          </NavLink>
          <FiSettings size={24} />
          <div className="border-t border-gray-400 w-6" />
          <FiVideo size={24} />
        </div>
      </div>

      {/* PEOPLE LIST */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-white p-4 shadow-lg transform transition-transform duration-300 z-30 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="font-semibold text-gray-700">People</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FiX size={20} />
          </button>
        </div>

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mb-4">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2 text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-3 overflow-y-auto h-[80vh]">
          {chatPartnersList.map((partner) => (
            <NavLink
              key={partner._id}
              onClick={() => {
                setSelectedPartner(partner);
                setIsSidebarOpen(false);
              }}
              to={`/chatbox/${partner._id}`}
              className={({ isActive }) =>
                `flex items-center justify-between hover:bg-gray-100 p-2 rounded-md cursor-pointer
     ${isActive ? "bg-gray-200 border-l-4 border-[#BA68C8]" : ""}`
              }
            >
              <div className="flex items-center space-x-3">
                {partner?.profilePic ? (
                <img
                  src={`http://localhost:8000/${partner?.profilePic}`}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BA68C8] font-semibold uppercase">
                  {partner?.firstName?.[0]}
                  {partner?.lastName?.[0]}
                </div>
              )}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-800 text-sm">
                      {capitalize(partner.firstName)} {capitalize(partner.lastName)}
                    </p>
                    <span
                      className={`w-2 h-2 rounded-full ${isUserOnline(partner._id) ? "bg-green-500" : "bg-gray-400"
                        }`}
                    ></span>
                  </div>
                  <p className="text-gray-500 text-xs truncate">
                    {partner.lastMessage || "No messages yet"}
                  </p>
                </div>
              </div>
            </NavLink>

          ))}
        </div>
      </div>


      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-[#BA68C8] px-4 py-3 border-b">
          {selectedPartner ? (
            <div className="flex items-center space-x-3">
              {selectedPartner?.profilePic ? (
                <img
                  src={`http://localhost:8000/${selectedPartner?.profilePic}`}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BA68C8] font-semibold uppercase">
                  {selectedPartner?.firstName?.[0]}
                  {selectedPartner?.lastName?.[0]}
                </div>
              )}

              <div>
                <h2 className="font-semibold text-white text-sm">
                  {capitalize(selectedPartner.firstName)}{" "}
                  {capitalize(selectedPartner.lastName)}
                </h2>
                <p className="text-xs text-gray-300">
                  {isUserOnline(selectedPartner._id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-white text-sm italic">
              Select a chat to start messaging
            </div>
          )}
          <div className="flex items-center space-x-4 text-white">
            <FiPhone />
            <FiVideo />
            <FiMoreVertical />
          </div>
        </div>

        {/* Chat messages */}
        {selectedPartner && (
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 lg:px-20 py-6 space-y-3 bg-[#f2f6ff]"
          >
            {messages.map((msg, idx) => {
              const mine =
                String(msg.senderId || msg.sender) === String(senderId);
              return (
                <div
                  key={msg._id || idx}
                  className={`flex ${mine ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`max-w-xs md:max-w-md rounded-2xl px-4 py-2 text-sm shadow-sm ${mine
                      ? "bg-[#BA68C8] text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                  >
                    {msg.message || msg.text}
                    <p className="text-[10px] text-gray-400 mt-1 text-right">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Input area */}
        {selectedPartner && (
          <div className="flex items-center justify-between bg-white px-4 py-3 border-t">
            <div className="flex items-center space-x-3 w-full">
              <FiSmile size={20} className="text-gray-500 cursor-pointer" />
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message here..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-sm text-black"
              />
              <FiImage size={20} className="text-gray-500 cursor-pointer" />
              <button
                onClick={sendMessage}
                className="bg-[#BA68C8] p-2 rounded-md text-white cursor-pointer"
              >
                <FiSend />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
