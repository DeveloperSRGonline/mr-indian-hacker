import React, { useState } from 'react';
import './Connect.scss';
import { Mail, Phone, MapPin } from 'lucide-react';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted!');
        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });
    };

    return (
        <section className="connect-section">
            <h2>Let's Collaborate</h2>
            <p>We are always open to exciting collaborations. Reach out to us below!</p>
            <div className="connect-content">
                <div className="connect-left">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company / Organization"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
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
