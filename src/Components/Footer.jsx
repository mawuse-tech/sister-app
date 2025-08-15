import React, { useRef, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
];

const Footer = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const speed = 1; // pixels per frame
    let animationFrame;

    const scroll = () => {
      slider.scrollLeft += speed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const allLogos = [...logos, ...logos];

  return (
    <footer className="bg-purple-100">
      {/* Continuous Logo Slider */}
      <div className="overflow-hidden py-6 bg-purple-100">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {allLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="h-12 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#BA68C8] text-white py-10 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <p className="text-sm leading-6">
        At Sisters, we’re committed to uplifting, educating, and connecting women around the world. Whether you're seeking mentorship, career growth, or a safe and inspiring community — we’re here for you.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">QUICK LINK</h3>
            <ul className="space-y-2 text-sm">
              <li>Volunteer</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Login</li>
              <li>Support</li>
              <li>Networking</li>
            </ul>
             
          </div>

          {/* Latest News */}
          <div>
            <h3 className="font-bold mb-4">LATEST NEWS</h3>
            <ul className="space-y-4 text-sm">
              <li>Financial express announces the data from the archives</li>
              <li>Mental health is as important as physical health</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +233 55 123 4567
              </li>
              <li>lapaz, Accra - Ghana</li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> sisters@gmail.com
              </li>
            </ul>
          </div>
          <div className="mt-4">
              <p className="text-sm mb-2">Subscribe Our Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full rounded-l bg-white text-gray-800"
                />
                <button className="bg-[#BA68C8] px-4 rounded-r text-white">
                  →
                </button>
              </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-pink-200 pt-4 text-center text-sm text-pink-100">
          © Copyright Sisters 2025 | All Rights Reserved | Design by Trendx Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
