import React from "react";
import "./HeroSection.scss";
import Particles from "../components/Particles";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="particles-background">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Mr. Indian Hacker</h1>
        <h2>We Do Everything.</h2>
        <p>
          Type <span>3</span> Fun.
        </p>
        <a
          className="hero-cta"
          href="https://www.youtube.com/MRINDIANHACKER"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Titanium Army
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
