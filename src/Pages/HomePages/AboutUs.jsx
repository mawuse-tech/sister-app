import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import sunset from '../../assets/images/sunset.png'; // optional for later

// Reusable scroll animation wrapper
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const AboutUs = () => {
  const shimmerRef = useRef(null);
  const shimmerInView = useInView(shimmerRef, { once: false, amount: 0.3 }); 
  // amount: 0.3 = triggers when 30% of element is visible

  return (
    <main className="bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 min-h-screen py-16 px-6">
      {/* Header Section */}
     <FadeIn>
  <header className="text-center max-w-3xl mx-auto mb-16">
    <motion.h1
      className="text-4xl font-bold text-purple-800 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Us
    </motion.h1>
    <motion.p
      className="text-lg text-purple-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Sisters is a movement powered by women, for women — building spaces to connect, grow, and thrive.
    </motion.p>
  </header>
</FadeIn>


      {/* Mission Section */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div
            ref={shimmerRef}
            className="relative rounded-2xl overflow-hidden shadow-md"
          >
            {/* Image */}
            <motion.img
              src={sunset}
              alt="Women participating in a networking and empowerment session"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(120deg, rgba(128,0,128,0.3), rgba(255,192,203,0.2), transparent)',
                backgroundSize: '300% 300%',
              }}
              animate={
                shimmerInView
                  ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }
                  : { backgroundPosition: '0% 50%' }
              }
              transition={
                shimmerInView
                  ? { duration: 8, repeat: Infinity, ease: 'linear' }
                  : { duration: 0 }
              }
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our mission is to foster inclusive communities where every woman, regardless of background,
              can feel seen, heard, and supported. We host mentorship programs, career-building workshops,
              wellness sessions, and network-driven events to help you rise — both personally and professionally.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2023, SheRise began as a small initiative among friends passionate about changing how women access
            community, growth, and resources. Today, we’ve expanded into a growing network of women across industries —
            supporting each other with compassion, strength, and solidarity.
          </p>
        </FadeIn>
      </section>
    </main>
  );
};

export default AboutUs;
