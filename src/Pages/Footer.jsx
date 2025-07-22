import React from 'react';
import './Footer.scss';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h3>Mr. Indian Hacker</h3>
                <p>Inspiring millions with science, experiments, and crazy ideas!</p>
                <div className="social-icons">
                    <Youtube />
                    <Instagram />
                    <Twitter />
                    <Facebook />
                </div>
            </div>

            <div className="footer-links">
                <div>
                    <h4>About</h4>
                    <ul>
                        <li>Our Story</li>
                        <li>Experiments</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h4>Opportunities</h4>
                    <ul>
                        <li>Brand Collaborations</li>
                        <li>Educational Partnerships</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Mr. Indian Hacker. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
