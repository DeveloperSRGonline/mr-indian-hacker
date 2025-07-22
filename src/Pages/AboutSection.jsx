import React, { useEffect } from 'react';
import './AboutSection.scss';
import DummyImage from '../assets/images/hero.png'; // Replace with your actual image path
const AboutSection = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in, .slide-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        elements.forEach(el => observer.observe(el));
    }, []);

    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text slide-in">
                    <h2>About Me</h2>
                    <p>
                        I’m a creator, experimenter, and content enthusiast.  
                        I believe in learning by doing, inspiring others, and pushing the limits of creativity.  
                        Every experiment teaches something new, and that's what keeps me going.
                    </p>
                    <button className="about-cta">Know More</button>
                </div>
                <div className="about-image fade-in">
                    <img src={DummyImage} alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
