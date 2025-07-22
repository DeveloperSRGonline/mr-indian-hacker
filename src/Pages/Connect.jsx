import React from 'react';
import './Connect.scss';
import { Mail, Phone, MapPin } from 'lucide-react';

const Connect = () => {
    return (
        <section className="connect-section">
            <h2>Let's Collaborate</h2>
            <p>We are always open to exciting collaborations. Reach out to us below!</p>
            <div className="connect-content">
                <div className="connect-left">
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Company / Organization" />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="connect-right">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p><Mail size={16} /> email@example.com</p>
                        <p><Phone size={16} /> +91 12345 67890</p>
                        <p><MapPin size={16} /> Jaipur, India</p>
                    </div>
                    <div className="opportunities">
                        <h3>Collaboration Opportunities</h3>
                        <ul>
                            <li>Brand Partnerships</li>
                            <li>Educational Partnerships</li>
                            <li>Events & Sponsorships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
