import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6">
      <motion.h2
        className="text-3xl font-bold mb-6 text-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        className="bg-base-200 border border-base-300 rounded-box w-full max-w-md p-6 space-y-4 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
        </fieldset>

        <fieldset>
          <legend className="text-lg font-semibold mb-2">Message</legend>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            placeholder="Type a message"
            required
          ></textarea>
        </fieldset>

        <div className="text-center">
          <button type="submit" className="btn btn-neutral w-full hover:scale-105 transition-transform duration-200">
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUs;
