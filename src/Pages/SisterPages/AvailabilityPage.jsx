// AvailabilityPage.jsx
import toast from "react-hot-toast";
import React, { useState } from "react";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../../redux-store/features/users/userThunks";
import { updatedVolunteerData } from "../../redux-store/features/users/userLoggedInSlice"
import moment from "moment/moment";

const daysOftheWeek = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

const AvailabilityPage = () => {
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const volunteerAvailableTime = useSelector((state) => state.isUserLoggedIn.user.availability);

  // submit new slot
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!day || !startTime || !endTime) {
      toast.error("Please fill all fields");
      setLoading(false)
      return;
    }

    try {
      const response = await api.post("/available", { day, startTime, endTime });
      console.log('---------', response.data.availability)

      toast.success("Availability saved!");

      dispatch(updatedVolunteerData(response.data.availability));

      // reset form
      setDay("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false)
    }
  };

  const handleDeleteSlot = async (slotId) => {

    try {
      const response = await api.delete(`/deleteSlot/${slotId}`);
      toast.success("Slot deleted!");
      // console.log(response.data.availability)

      dispatch(updatedVolunteerData(response.data.availability));
    } catch (error) {
      toast.error("Error deleting slot");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Set Your Availability
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Day dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select a Day
          </label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="select select-bordered w-full text-white rounded-lg border-gray-300"
          >
            <option value=""> Choose a day </option>
            {daysOftheWeek.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Time inputs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Set time  from – to
          </label>
          <div className="flex gap-4">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="input input-bordered w-full text-white rounded-lg border-gray-300"
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="input input-bordered w-full text-white rounded-lg border-gray-300"
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`h-12 rounded-lg text-white font-medium transition ${loading
            ? "bg-purple-400 cursor-not-allowed"
            : "bg-[#BA68C8] hover:bg-purple-400"
            }`}
        >
          {loading ? "Saving..." : "Save Availability"}
        </button>
      </form>

      {/* Availability list */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">
          Your available times are:
        </h4>
        {volunteerAvailableTime?.length > 0 ? (
          <ul className="space-y-2">
            {volunteerAvailableTime.map((slot) => (
              <li
                key={slot._id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >

                <span className="text-gray-800 font-medium">
                  {slot.day}: {moment(slot.startTime, "HH:mm").format("hh:mm A")} – {moment(slot.endTime, "HH:mm").format("hh:mm A")}
                </span>

                <button
                  onClick={() => handleDeleteSlot(slot._id)}
                  className="btn btn-xs bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1 mx-3 border-0"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven’t set any availability yet.</p>
        )}
      </div>
    </div>

  );
};

export default AvailabilityPage;
