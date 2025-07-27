import React, { useState, useEffect } from "react";


const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.avif",
    "/img6.png",
    "/asiapink&purple.png",
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="slideshow-container "
      style={{
        absolute: "0",
        top: "0",
        left: "0",
        zIndex: "10",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${images[currentIndex]})`,
        transition: "background-image 1s ease-in-out"
      }}
    >
    </div>
  );
};

export default BackgroundSlideshow;
