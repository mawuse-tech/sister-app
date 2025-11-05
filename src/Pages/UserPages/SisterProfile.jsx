import React, { useEffect, useState } from 'react'
import sisterone from '../../assets/images/teacher.jpg'
import { NavLink, useParams } from 'react-router-dom'
import api from '../../config/axios';
import moment from 'moment';

const SisterProfile = () => {
  const [volunteer, setVolunteer] = useState(null);
  //console.log("===========", volunteer)
  const { id } = useParams()

  useEffect(() => {
    const fetchVolunreerData = async () => {
      try {
        const response = await api.get(`/volunteer/${id}`)
        // console.log('------------',response.data)
        setVolunteer(response.data.volunteerProfile)
      } catch (error) {
        console.log(error)
      }
    };

    fetchVolunreerData()
  }, [id])

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";


  return (
    <>
      <div className="bg-[#BA68C8] h-[10rem] lg:h-36 relative flex justify-center">

        <div className='absolute lg:top-10 top-10 text-center text-white'>
          <h3 className='text-[2rem]'>Welcome to my profile</h3>
          <p>hey I am here for you, you can trust me, just hit the chat button</p>
        </div>
      </div>

      <div className='bg-[#f7f0f8]  h-full pt-6 px-4 flex justify-center text-gray-700'>
        <div className="bg-white rounded-2xl flex flex-col lg:flex-row justify-around w-full max-w-[60rem] py-10 px-4 gap-6">
          {/* Left Section */}
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/3">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="avatar">
                <div className="w-36 rounded-full ring-[#BA68C8] ring-offset-[#BA68C8] ring-2">
                  <img src={`http://localhost:8000/${volunteer?.profilePic}`}
                    alt={volunteer?.name} />
                </div>
              </div>

              <div className="text-[1rem] md:text-[1.1rem] flex flex-col justify-center gap-2 text-center lg:text-left">
                <p className="font-semibold">  {`${capitalize(volunteer?.firstName)} ${capitalize(volunteer?.lastName)}`}</p>
                <p>{capitalize(volunteer?.proffession)}</p>
                {/* <p>Accra, Ghana</p> */}
                <p>{volunteer?.email}</p>

                <NavLink to={`/chatBox/${volunteer?._id}`}>
                  <span className="bg-[#BA68C8] px-4 py-1 w-fit mx-auto lg:mx-0 rounded text-white text-sm cursor-pointer">
                    chat with me
                  </span>
                </NavLink>

              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-gray-700 w-[2px] h-auto mx-4"></div>
          </div>

          {/* Right Section */}
          <div className="text-gray-700 w-full lg:w-1/2 flex flex-col gap-4">
            <div>
              <p className="font-semibold text-xl md:text-2xl">About me</p>
              <p className="text-sm md:text-base mt-2">
                {capitalize(volunteer?.bio)}
              </p>
            </div>

            <div className="text-gray-700 flex flex-col gap-2">
              <p className="font-semibold text-xl md:text-2xl">Available Days</p>

              {volunteer?.availability?.map((slot) => (
                <div
                  key={slot._id}
                  className="bg-[#f7f0f8] shadow flex justify-between px-4 py-2 w-full lg:w-2/3 rounded-md text-sm md:text-base"
                >
                  <span>{slot.day}</span>
                  <p>{moment(slot.startTime, "HH:mm").format("hh:mm A")} –{moment(slot.endTime, "HH:mm").format("hh:mm A")}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default SisterProfile