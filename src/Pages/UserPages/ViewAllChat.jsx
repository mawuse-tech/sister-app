import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSocket, initSocket } from "../../config/socket";
import api from "../../config/axios";
import { addMessage, setMessagesForReceiver } from "../../redux-store/features/users/chatSlice";

const ViewAllChat = () => {
  const { id: receiverId } = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.isUserLoggedIn)
  //console.log(user)

  const senderId = user?._id;

  const allMessages = useSelector((store) => store.chat.messages);
  const messages = allMessages[receiverId] || [];
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null);
  const scrollRef = useRef(null);

  // Fetch message history
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

  // Init socket + handle incoming messages
  useEffect(() => {
    if (!senderId) return;

    const socket = initSocket();
    socketRef.current = socket;
    socket.emit("join", senderId);

    const handleReceive = (msg) => {
      const msgSender = String(msg.senderId || msg.sender);
      const msgReceiver = String(msg.receiverId || msg.receiver);

      const isRelated =
        (msgSender === String(senderId) && msgReceiver === String(receiverId)) ||
        (msgSender === String(receiverId) && msgReceiver === String(senderId));

      if (isRelated) {
        // 🧠 Prevent duplicate if it's your own message
        if (msgSender === String(senderId)) return;

        dispatch(addMessage({ receiverId, message: msg }));
        scrollToBottom();
      }
    };

    socket.on("receiveMessage", handleReceive);

    return () => {
      socket.off("receiveMessage", handleReceive);
    };
  }, [senderId, receiverId, dispatch]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Send message
  const sendMessage = async () => {
    if (!newMessage.trim() || !senderId || !receiverId) return;

    const payload = {
      senderId,
      receiverId,
      message: newMessage.trim(),
    };

    // optimistic update
    dispatch(addMessage({ receiverId, message: payload }));
    setNewMessage("");
    scrollToBottom();

    const socket = getSocket();
    if (socket) socket.emit("sendMessage", payload);
  };

  return (
    <div className="lg:w-2xl flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => {
          const mine = String(msg.senderId || msg.sender) === String(senderId);
          return (
            <div key={msg._id || idx} className={`chat ${mine ? "chat-end" : "chat-start"}`}>
              <div className={`chat-bubble ${mine ? "chat-bubble-secondary" : "chat-bubble-primary"}`}>
                {msg.message}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 p-3 bg-white rounded shadow mt-3">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="input input-bordered w-full"
        />
        <button
          onClick={sendMessage}
          className="btn bg-[#BA68C8] text-white hover:bg-[#a256b5]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ViewAllChat;
