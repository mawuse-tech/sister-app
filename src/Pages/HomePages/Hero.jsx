import React, { useState, useEffect } from "react";
import BackgroundSlideshow from "./BackgroundSlideshow";
import mosImage from "../../assets/images/mos.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import b1Image from "../../assets/images/b1.png";
import twoWildImage from "../../assets/images/2wild.png";
import onekImage from "../../assets/images/onek.png";
 
const testimonials = [
  { text: "This community helped me build my confidence and find new friends.", name: "Ama, Ghana" },
  { text: "I landed a new job through a SheRise networking event!", name: "Grace, Kenya" },
  { text: "I finally feel seen and heard. Thank you!", name: "Ruth, Nigeria" },
];


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ articles, setArticles ] = useState([]);

   

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const steps = [
  {
    title: "Sign Up",
    description: "Create an account",
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    ),
  },
  {
    title: "Log In",
    description: "Access Your dashboard",
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m12 0l-4-4m4 4l-4 4m6-10h2a2 2 0 012 2v12a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Search",
    description: "Find a professional",
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

 
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 relative rounded-2xl">
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
            <h1 className="mb-5 text-5xl font-bold"> Empowering Women to Rise in everyday Life.</h1>
            <p className="mb-6 text-lg text-purple-100">
             Join a thriving community of women building careers, confidence, and connections.
              Talk to our team of expert today
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
     <div className="w-full flex justify-center bg-pink-10 py-16">
  <div className="stats  md:stats-horizontal shadow-xl rounded-xl bg-white text-purple-800">
    
    {/* Downloads Stat */}
    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="stat-title">Downloads</div>
      <div className="stat-value">
        <CountUp start={0} end={31000} duration={2.5} separator="," prefix="+" />

      </div>
      <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>

    {/* New Users Stat */}
    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      <div className="stat-title">New Users</div>
      <div className="stat-value">
        <CountUp start={0} end={4200} duration={2.5} separator="," prefix="+" />

      </div>
      <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
    </div>

    {/* New Registers Stat */}
    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      </div>
      <div className="stat-title">New Registers</div>
      <div className="stat-value">
        <CountUp start={0} end={1200} duration={2.5} separator="," prefix="+" />

      </div>
      <div className="stat-desc text-red-500">↘︎ 90 (14%)</div>
    </div>

  </div>
</div>


     <section className="w-full flex flex-col md:flex-row items-center justify-between bg-purple-100 py-16 px-6 md:px-16">
      {/* Left Text Section */}
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center md:text-left mb-10 md:mb-0 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight mb-4">
          Why Choose <span className="text-pink-500">Sisters </span>?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          We’re dedicated to uplifting, educating, and connecting women globally. Whether you're seeking mentorship, career advancement, or a safe and inspiring space — we’re here for you.
          <br /><br />
          Through expert resources, workshops, and an empowering community, we foster real transformation. Join thousands of women building confidence, careers, and lasting connections.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md">
          Join the Sisterhood
        </button>
      </div>

      {/* Right Image Section */}
 <div className="relative flex-1 flex justify-center items-center">
  {/* Decorative SVG */}
  <div className="absolute -top-6 -right-6 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply blur-2xl opacity-50 animate-pulse z-0" />

  {/* Foreground Image */}
  <img
    src={b1Image}
    alt="Empowered woman"
    className="relative z-10 rounded-2xl object-cover w-full max-w-md shadow-lg hover:shadow-xl transition duration-300"
  />
</div>
    </section>

      {/* Why We Exist */}
       <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 text-center max-w-3xl mx-auto"
    >
      <h3 className="text-4xl font-extrabold mb-6 text-purple-800 leading-snug">
        Why We Exist
      </h3>
      <p className="text-purple-600 text-lg leading-relaxed">
        We’re building a <strong>safe, inclusive space</strong> where women can network, learn,
        and uplift each other—regardless of background, career journey, or stage of life.
        <br className="hidden md:block" />
        It’s more than community; it’s <span className="text-pink-500 font-semibold">sisterhood</span> with purpose.
      </p>
    </motion.section>

     {/* About Us Section */}
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-purple-200 py-10 px-4 md:px-10">
      {/* Left Image Section */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={twoWildImage}
          alt="Portrait of a confident, empowered woman representing the Sisters community"
          className="rounded-2xl object-cover w-full max-w-md max-h-[80vh] shadow-xl"
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="flex-1 bg-white rounded-2xl flex flex-col justify-center items-center p-10 text-center md:text-left shadow-md"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">ABOUT US</h2>
        <p className="max-w-xl text-purple-900 text-base md:text-lg leading-relaxed">
          At Sisters, we’re committed to uplifting, educating, and connecting women around the world. 
          Whether you're seeking mentorship, career growth, or a safe and inspiring community — we’re here for you.
          <br /><br />
          Our platform fosters real change through expert resources, workshops, and a supportive sisterhood. 
          Join thousands of women building confidence, careers, and connection.
        </p>
      </motion.div>
    </section>


    <section className="py-10 px-4 text-center bg-white">
      {/* Header + Text Section with Animation */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-purple-800 mb-4">VOLUNTEERS</h2>
        <h3 className="text-xl font-bold text-purple-500 mb-4">
        Are you a certified professional in your job scope. Join us uplift fellow sisters.
        </h3>
        <p className="italic text-gray-600 max-w-3xl mx-auto mb-12 text-sm">
          Feeling overwhelmed by troubles all around? Don’t worry, we’ve got your back.
          Our streamlined approach takes you from anxious to confident in three easy steps —
          no round-arounds, no jargon — just clear action and peace of mind.
        </p>

        {/* Join Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-purple-700 px-8 py-2 rounded-full font-bold text-lg hover:bg-purple-200 transition-colors duration-300"
        >
          Become a Member
        </button>
      </motion.div>
    </section>

   {/* services */}
   <section className="w-full flex flex-col md:flex-row items-center justify-center bg-purple-200 py-10 px-4">
      {/* Left Text Section */}
      <motion.div
        className="flex-1 rounded-2xl bg-white flex flex-col justify-center items-center p-5 text-center md:text-left shadow-md"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">SERVICES</h2>
        <p className="max-w-xl text-purple-900 text-base md:text-lg leading-relaxed">
          At Sisters, we’re committed to uplifting, educating, and connecting women around the world. 
          Whether you're seeking mentorship, career growth, or a safe and inspiring community — we’re here for you.
          <br /><br />
          Our platform fosters real change through expert resources, workshops, and a supportive sisterhood. 
          Join thousands of women building confidence, careers, and connection.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={onekImage}
          alt="Empowered woman smiling confidently"
          className="rounded-2xl object-cover w-full max-w-md max-h-[80vh] shadow-xl"
        />
      </motion.div>
    </section>
 

{/* How it works */}
<section className="py-10 px-4 text-center bg-white"> 
<div className="text-center bg-white">
   <h2 className="text-4xl font-bold text-center text-purple-800 mb-4">How It Works</h2>
   <h3 className="text-1xl font-bold text-center text-purple-500 mb-4">Get a quick help 
    where ever you find yourself. You remain anonymous </h3>
     <p className="italic text-gray-600 max-w-3xl mx-auto text-center mb-12 text-sm">
        Feeling overwhelmed by troubles all around? Don’t worry we have got your back. 
        Our streamlined approach takes you from being anxious to confident in three easy steps —
        no round-arounds, no jargon — just clear action and peace of mind.
      </p>
</div>
       <div className="flex flex-row md:flex-row justify-center items-center gap-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 max-w-xs p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {/* Circle with Icon */}
            <div className="w-20 h-20 rounded-full border-4 border-purple-600 flex items-center justify-center">
              {step.icon}
            </div>

            {/* Title */}
            <h4 className="text-lg text-pink-500 font-semibold capitalize">{step.title}</h4>

            {/* Description with checkmark */}
            <div className="flex items-center text-sm text-purple-700">
              <svg
                className="w-4 h-4 mr-1 text-purple-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {step.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

 
      {/* Testimonials */}
      <section className="py-16 bg-purple-400 text-white text-center">
  <h3 className="text-3xl font-bold mb-10">What Women Are Saying</h3>
  <div className="max-w-xl mx-auto bg-purple-600 p-6 rounded-xl shadow-lg transition duration-500">
   <motion.div
  key={activeIndex}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  <p>"{testimonials[activeIndex].text}"</p>
  <span className="block mt-4 font-bold">— {testimonials[activeIndex].name}</span>
</motion.div>
  </div>
</section>


   {/* Articles Section */}
<section className="py-16 px-4 bg-gray-50">
  <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">Latest Articles</h2>
  
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {/* Example Article Card */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src="https://source.unsplash.com/400x200/?wellbeing,mental"
        alt="Mental Health"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">Mental Health Tips</h3>
        <p className="text-sm text-gray-600">
          Explore simple, practical routines to boost your wellbeing and stay balanced every day.
        </p>
        <button className="mt-4 text-sm font-medium text-pink-500 hover:underline">
          Read More →
        </button>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default Hero;
