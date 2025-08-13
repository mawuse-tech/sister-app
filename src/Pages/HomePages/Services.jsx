import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Lightbulb } from 'lucide-react';
import sunset from '../../assets/images/sunset.png';


const services = [
  {
    icon: <HeartHandshake className="w-10 h-10 text-pink-500" />,
    title: 'Community Support',
    description: 'We create safe spaces for women to connect, share experiences, and lift each other up.',
  },
  {
    icon: <Sparkles className="w-10 h-10 text-purple-500" />,
    title: 'Workshops & Mentorship',
    description: 'Learn from experienced mentors and attend empowering events designed to inspire growth.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: 'Career Resources',
    description: 'Get tools, guidance, and opportunities tailored to women at every stage of their careers.',
  },
];

const Services = () => {
  return (
    <div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sunset})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
  </div>
  
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Our Services</h2>
        <p className="text-lg text-purple-600 max-w-2xl mx-auto">
          We are dedicated to uplifting and empowering women through a variety of support-driven services.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Services;
