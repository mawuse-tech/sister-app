import React from 'react';
import loginsvg from '../../assets/images/sign.png'

const ContactUs = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden ">

          {/* left Side */}
         <div  className="lg:w-1/2 p-6  w-full">
          <div><span className="font-bold mb-2 text-gray-700">Sister Sister</span></div>
           <div className='flex items-center justify-center'>
           <img src={loginsvg} alt="login svg" />
          </div>

         </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 flex text-gray-700 w-full mt-10">

            <fieldset>
          <legend className="text-lg font-semibold mb-2">Your Details</legend>

          <label className="label" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="input input-bordered w-full"
            placeholder="First Name"
            required
          />

          <label className="label" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="input input-bordered w-full"
            placeholder="Last Name"
            required
          />

          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            required
          />

          <label className="label" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            className="input input-bordered w-full"
            placeholder="Phone Number"
          />
         

        
          <legend className="text-lg font-semibold mb-2">Message</legend>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            placeholder="Type a message"
            required
          ></textarea>
         
              <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                <button className='cursor-pointer'>Submit</button>
              </div>

          </fieldset>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs;