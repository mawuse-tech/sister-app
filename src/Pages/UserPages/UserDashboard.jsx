import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import lawyer from "../../assets/images/teacher.jpg";
import { FiMessageCircle, FiUsers, FiHeart } from "react-icons/fi";
import { chatPartners, fetchAllVolunteers } from "../../redux-store/features/users/userThunks";

const UserDashboard = () => {
  const { user } = useSelector((store) => store.isUserLoggedIn);
  const { partners } = useSelector((store) => store.chatPartnersData);
  const { volunteers } = useSelector((store) => store.volunteers);
  //console.log(volunteers)
  const dispatch = useDispatch()
  //console.log('pat',partners)

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  useEffect(() => {
    if (user?._id) {
      dispatch(chatPartners(user._id));
    }
    dispatch(fetchAllVolunteers())
  }, [dispatch, user]);

  return (
    <div className="bg-[#f7f0f8] min-h-screen flex justify-center p-6 text-gray-700">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-md lg:p-8 md:p-8 p-3 space-y-8">

        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Welcome, <span className="text-[#BA68C8]">{capitalize(user?.firstName)}</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We’re glad to have you back. Here’s what’s happening:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Chats */}
          <div className="bg-[#f1d7f5] rounded-xl lg:p-6 md:p-6 p-1 shadow-sm">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <FiMessageCircle className="text-[#BA68C8]" /> Recent Chats
            </h3>

            {partners.map((partner, index) => (
              <div
                key={partner._id || index}
                className="flex items-center justify-between bg-white p-4 rounded-lg mb-3 shadow"
              >
                <div className="flex gap-4 items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring-2 ring-[#BA68C8]">
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
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold">
                      {capitalize(partner?.firstName)} {capitalize(partner?.lastName)}
                    </p>
                    <p className="text-sm text-gray-500">{partner.proffession}</p>
                  </div>
                </div>

                <NavLink key={partner._id}
                  to={`/chatbox/${partner._id}`}>
                  <span className="text-[#BA68C8] underline text-sm">Continue</span>
                </NavLink>
              </div>
            ))}


            <div className="text-center mt-3">
              <NavLink to="/chatbox">
                <span className="text-[#BA68C8] underline italic">
                  View all chats...
                </span>
              </NavLink>
            </div>
          </div>


          <div className="bg-[#BA68C8] rounded-xl lg:p-6 md:p-6 px-2 py-4 text-white shadow-sm">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <FiUsers /> Sisters Directory
            </h3>

            {volunteers.length > 0 && (
              <div className="flex items-center justify-between bg-[#a64db3] p-4 rounded-lg mb-3 shadow">
                <div className="flex gap-4 items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring-2 ring-white">
                      <img src={`http://localhost:8000/${volunteers[0]?.profilePic}`} alt="Sister Avatar" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {capitalize(volunteers[0]?.firstName)} {capitalize(volunteers[0]?.lastName)}
                    </p>
                    <p className="text-sm">{volunteers[0]?.proffession}</p>
                  </div>
                </div>
                <NavLink to="/chatbox">
                  <span className="underline text-sm">Start Chat</span>
                </NavLink>
              </div>
            )}

            <div className="text-center mt-3">
              <NavLink to="/allsisters">
                <span className="underline italic">View all sisters...</span>
              </NavLink>
            </div>

            {/* Volunteer Section */}
            <div className="bg-[#fef6fb] border border-[#BA68C8] rounded-xl p-6 shadow-md text-center">
              <h3 className="text-2xl font-semibold text-[#BA68C8] mb-2 flex items-center justify-center gap-2">
                <FiHeart /> Become a Volunteer
              </h3>
              <p className="text-gray-600 mb-4">
                Share your knowledge, support young women, and make a difference.
              </p>
              <NavLink to="/volunteer">
                <button className="px-6 py-2 bg-[#BA68C8] text-white rounded-lg shadow hover:bg-[#9c4eb0] transition">
                  Fill Volunteer Form
                </button>
              </NavLink>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
