import React, { useState } from "react";
import "./AboutSection.scss";
import dilraj from "../assets/images/Dilraj_img.jpg";

const AboutSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="about-section">
      <div className="about-container">
        {/* Left Side Image */}
        <div
          className="image-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() =>
            window.open(
              "https://www.instagram.com/dilraj_singh_rawat?utm_source=ig_web_button_share_sheet",
              "_blank"
            )
          }
        >
          <img src={dilraj} alt="Dilraj Singh Rawat" />
          {isHovering && (
            <div
              className="tooltip"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              Learn More
            </div>
          )}
        </div>

        {/* Right Side Info */}
        <div className="about-text">
          <h2>About <span>Mr. Indian Hacker</span></h2>
          <p>
            Dilraj Singh Rawat, popularly known as Mr. Indian Hacker, is one of
            India's top science content creators on YouTube. He shares
            jaw-dropping experiments, DIY builds, and adventurous challenges.
          </p>
          <h4>Role: Creator, Innovator, Educator</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
