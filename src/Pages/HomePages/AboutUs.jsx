import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 min-h-screen py-16 px-6">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-purple-800 mb-4">About Us</h1>
        <p className="text-lg text-purple-600">
          SheRise is a movement powered by women, for women — building spaces to connect, grow, and thrive.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/images/about-mission.jpg"
          alt="Mission"
          className="rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our mission is to foster inclusive communities where every woman, regardless of background, can feel seen,
            heard, and supported. We host mentorship programs, career-building workshops, wellness sessions, and
            network-driven events to help you rise — both personally and professionally.
          </p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2023, SheRise began as a small initiative among friends passionate about changing how women access
          community, growth, and resources. Today, we’ve expanded into a growing network of women across industries —
          supporting each other with compassion, strength, and solidarity.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
