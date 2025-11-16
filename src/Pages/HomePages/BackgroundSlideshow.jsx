import React, { useState, useEffect } from "react";

const BackgroundSlideshow = () => {
  const images = [
    "/img2.png",
    "/img3.png",
    "/img6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
