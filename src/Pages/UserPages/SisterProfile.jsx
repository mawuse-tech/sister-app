import React from 'react'
import sisterone from '../../assets/images/teacher.jpg'

const SisterProfile = () => {
  return (
    <>
      <div className="bg-[#BA68C8] h-[10rem] lg:h-36 relative flex justify-center">

        <div className='absolute lg:top-10 top-10 text-center text-white'>
          <h3 className='text-[2rem]'>Welcome to my profile</h3>
          <p>hey I am here for you, you can trust me, just hit the chat button</p>
        </div>
      </div>

      <div className='bg-[#f7f0f8]  h-full pt-6 px-4 flex justify-center text-gray-700'>
        <div className="bg-white rounded-2xl flex flex-col lg:flex-row justify-around w-full max-w-[60rem] py-6 px-4 gap-6">
          {/* Left Section */}
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/3">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="avatar">
                <div className="w-36 rounded-full ring-[#BA68C8] ring-offset-[#BA68C8] ring-2">
                  <img src={sisterone} alt="Sister Avatar" />
                </div>
              </div>

              <div className="text-[1rem] md:text-[1.1rem] flex flex-col justify-center gap-2 text-center lg:text-left">
                <p className="font-semibold">Nkunim Asaa Osei</p>
                <p>Psychologist</p>
                <p>Accra, Ghana</p>
                <p>nkunim1234@gmail.com</p>
                <span className="bg-[#BA68C8] px-4 py-1 w-fit mx-auto lg:mx-0 rounded text-white text-sm cursor-pointer">
                  chat with me
                </span>
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
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English.
              </p>
            </div>

            <div className="text-gray-700 flex flex-col gap-2">
              <p className="font-semibold text-xl md:text-2xl">Available Days</p>

              <div className="bg-[#f7f0f8] shadow flex justify-between px-4 py-2 w-full lg:w-2/3 rounded-md text-sm md:text-base">
                <span>Mondays</span>
                <p>5pm - 6pm</p>
              </div>
              <div className="bg-[#f7f0f8] shadow flex justify-between px-4 py-2 w-full lg:w-2/3 rounded-md text-sm md:text-base">
                <span>Fridays</span>
                <p>12pm - 4pm</p>
              </div>
              <div className="bg-[#f7f0f8] shadow flex justify-between px-4 py-2 w-full lg:w-2/3 rounded-md text-sm md:text-base">
                <span>Saturdays</span>
                <p>10am - 6pm</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SisterProfile