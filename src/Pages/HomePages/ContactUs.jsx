import React from 'react'

const ContactUs = () => {
  return (
    <div>Get in Touch
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Your Details</legend>

   <label className="label">First Name</label>
  <input type="First Name" className="input" placeholder="First Name" />
  
   <label className="label">Last Name</label>
  <input type="Last Name" className="input" placeholder="EmaLast Nameil" />
  
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Phone Number</label>
  <input type="Phone Number" className="input" placeholder="Phone Number" />

  <fieldset className="fieldset">
  <legend className="fieldset-legend">Message</legend>
  <textarea className="textarea h-24" placeholder="Type a Message"></textarea>
 
</fieldset>

  <button className="btn btn-neutral mt-4">Submit</button>
</fieldset>

    </div>
  )
}

export default ContactUs