import React from 'react'
import DashboardStructure from './DashboardStructure'

const AvailabilityPage = () => {
  return (
    <>
      <DashboardStructure title="Set Available time">
        <div className="flex flex-col gap-6 bg-white w-full rounded-2xl p-4 text-[#5651AB] lg:w-[38rem]">
          <div className="overflow-x-auto ">
            <table className="table  border-separate border-spacing-y-4">
              {/* head */}
              <thead>
                <tr className='text-[#5651AB] text-[1rem]'>
                  <th>Days</th>
                  <th>Available</th>
                  <th>Time range(from-to) </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className='bg-[#EAEBFF] rounded-2xl'>
                  <td>Monday</td>
                  <td>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  </td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />

                  </td>
                </tr>
                {/* row 2 */}
                <tr className='bg-[#F8E9FE] rounded-2xl'>
                  <td>Tuesday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />

                  </td>
                </tr>
                {/* row 3 */}
                <tr className='bg-[#EAEBFF] rounded-2xl'>
                  <td>Wednesday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                  </td>
                </tr>

                {/* row 4 */}
                <tr className='bg-[#F8E9FE] rounded-2xl'>
                  <td>Thursday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                  </td>
                </tr>

                 {/* row 5 */}
                 <tr className='bg-[#EAEBFF] rounded-2xl'>
                  <td>Friday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                  </td>
                </tr>

                 {/* row 6 */}
                 <tr className='bg-[#F8E9FE] rounded-2xl'>
                  <td>Saturday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                  </td>
                </tr>

                {/* row 7 */}
                 <tr className='bg-[#EAEBFF] rounded-2xl'>
                  <td>Sunday</td>
                  <td><input type="checkbox" defaultChecked className="checkbox checkbox-primary" /></td>
                  <td className='flex gap-2 text-white'>
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                    <input type="time" className="input input-bordered w-full bg-[#5651AB]" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='flex justify-center gap-3'>
           <button className="btn bg-[#5651AB] border-none px-7">Save</button>
           <button className="btn bg-[#5651AB] border-none px-7">Edit</button>
          </div>
        </div>


      </DashboardStructure>
    </>
  )
}

export default AvailabilityPage