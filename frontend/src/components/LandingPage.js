import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import "../assets/styles/Slider.css";

import image1 from "../assets/images/travel1.webp";
import image2 from "../assets/images/travel4.jpg";
import image3 from "../assets/images/travel3.jpg";

const images = [image2, image1, image3];

function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? "active" : ""}`}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
