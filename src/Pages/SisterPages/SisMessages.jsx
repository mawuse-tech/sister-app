import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { recentChatFunc } from "../../redux-store/features/users/userThunks";

const SisMessages = () => {
  const { recentChat, loading, error } = useSelector((store) => store.recentChatData);
  const { user } = useSelector((store) => store.isUserLoggedIn);
  const dispatch = useDispatch();

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  // Fetch recent messages when user loads
  useEffect(() => {
  if (user && user._id) {
    console.log("Fetching recent chats for:", user._id);
    dispatch(recentChatFunc(user._id));
  } else {
    console.log("User not loaded yet, skipping fetch");
  }
}, [user, dispatch]);


  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 lg:w-[38rem] shadow-lg">
      <h3 className="text-2xl py-2 font-medium text-gray-700">
        All messages from your mentees
      </h3>

      {loading && <p className="text-gray-500 italic">Loading messages...</p>}

      {error && (
        <p className="text-red-500 italic">
          Failed to load messages: {error}
        </p>
      )}

      {!loading && recentChat?.length > 0 ? (
        <>
          <h3 className="text-[1.2rem] items-center font-medium my-2">
            {recentChat.length} message
            {recentChat.length > 1 ? "s" : ""} waiting...
          </h3>

          {recentChat.map((chat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl flex justify-between lg:p-4 p-2 shadow-md hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">
                  {capitalize(chat?.senderId?.firstName)}{" "}
                  {capitalize(chat?.senderId?.lastName)}
                </p>
                <p className="text-sm text-gray-600 truncate w-64 md:w-72">
                  {chat?.message.slice(0, 50)}...
                </p>
              </div>

              <NavLink
                to={`/chatBox/${chat?.senderId?._id}`}
                className="font-medium mt-4 italic underline text-[#BA68C8]"
              >
                [Open Chat]
              </NavLink>
            </div>
          ))}
        </>
      ) : (
        !loading && (
          <p className="text-gray-500 italic text-sm">
            No recent messages yet.
          </p>
        )
      )}
    </div>
  );
};

export default SisMessages;
