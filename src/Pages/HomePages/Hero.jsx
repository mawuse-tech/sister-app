import React, { useState, useEffect } from "react";
import BackgroundSlideshow from "./BackgroundSlideshow";
import mosImage from "../../assets/images/mos.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 relative">
        <div className="absolute inset-0 z-0">
          <BackgroundSlideshow />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="hero-content text-neutral-content text-center relative z-10">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-5 text-5xl font-bold">WE ARE HERE TO LISTEN, TALK TO US</h1>
            <p className="mb-6 text-lg text-purple-100">
              A problem shared is a problem half solved. No matter the challenge, we are here to support you. 
              Talk to our team of experts today.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="join" smooth={true} duration={800}>
                <button className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-purple-100 transition">
                  Join Now
                </button>
              </Link>
              <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-purple-700 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center bg-pink-10 py-10">
        <div className="stats stats-vertical md:stats-horizontal shadow text-purple-800">
          <div className="stat">
            <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          
          <div className="stat">
             <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
    </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>

    {/* Why Us Section */}
<section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
  {/* Left Text Section */}
  <div className="flex-1 rounded-2xl bg-purple-200 flex flex-col justify-center items-center p-10 text-center">
    <h2 className="text-4xl font-bold text-purple-900 mb-6">WHY US</h2>
    <p className="max-w-md text-black-800 leading-relaxed">
      We’re committed to uplifting, educating, and connecting women around the world.
      Whether you're looking for mentorship, career growth, or a safe community, we’re here for you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
      like Aldus PageMaker including 
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 bg-purple-00 flex items-center justify-center p-6">
    <img
      src={mosImage}
      alt="Empowered woman"
      className="rounded-2xl object-cover l max-h-[80vh] shadow-lg"
    />
  </div>
</section>


      {/* Why We Exist */}
      <section id="about" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Why We Exist</h3>
        <p className="text-purple-600">
          We’re creating a safe and inclusive space for women to network, learn, and support one another—regardless of background, career path, or stage of life.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-purple-400">
        <h3 className="text-3xl font-bold text-center mb-10">What Women Are Saying</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { text: "This community helped me build my confidence and find new friends.", name: "Ama, Ghana" },
            { text: "I landed a new job through a SheRise networking event!", name: "Grace, Kenya" },
            { text: "I finally feel seen and heard. Thank you!", name: "Ruth, Nigeria" },
          ].map(({ text, name }, idx) => (
            <div key={idx} className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
              <p>"{text}"</p>
              <span className="block mt-4 font-bold">— {name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Join the Movement?</h3>
        <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-200">
          Become a Member
        </button>
      </section>

      {/* Articles Section */}
      <section className="py-10 px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold">Mental Health Tips</h3>
            <p className="text-sm mt-2">Explore daily routines to improve wellbeing...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
