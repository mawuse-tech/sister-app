import React from 'react'
import DashboardStructure from '../../LayoutPage/DashboardStructure';

const daysOftheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const AvailabilityPage = () => {
  return (
    <>
        <div className="flex flex-col gap-6 bg-white w-full rounded-2xl p-2 lg:w-[38rem]">
                <h3 className='text-2xl py-4 font-medium text-gray-700'>Set Available Time</h3>
          <div className="overflow-x-auto ">
            <table className="table  border-separate border-spacing-y-4">
              {/* head */}
              <thead>
                <tr className='text-gray-700 text-[1rem]'>
                  <th>Days</th>
                  <th>Available</th>
                  <th>Time range(from-to) </th>
                </tr>
              </thead>
              <tbody>
                {daysOftheWeek.map((day, index) => (
                  <tr key={index} className='bg-gray-50 rounded-2xl shadow'>
                    <td>{day}</td>
                    <td>
                      <input
                        type="checkbox"
                       defaultChecked
                        className="checkbox border-[#BA68C8]  checked:border-[#BA68C8] checked:bg-[#BA68C8] checked:text-white"
                      />
                    </td>
                    <td className='flex gap-2 text-white'>
                      <input type="time" className="input input-bordered w-full bg-[#BA68C8]" />
                      <input type="time" className="input input-bordered w-full bg-[#BA68C8]" />

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-center gap-3'>
            <button className="btn bg-[#BA68C8] border-none px-7">Save</button>
            <button className="btn bg-[#BA68C8] border-none px-7">Edit</button>
          </div>
        </div>
    </>
  )
}

export default AvailabilityPage