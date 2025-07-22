import React from 'react';
import './SocialImpact.scss';
import { Youtube, Instagram, Twitter, Facebook, Eye, Heart, MessageSquare, Users } from 'lucide-react';

const SocialImpact = () => {
    return (
        <section className="social-impact">
            <h2>Social Media Impact</h2>
            <p>Join millions of science enthusiasts across all platforms</p>

            <div className="social-cards">
                <div className="card">
                    <Youtube size={32} />
                    <h3>YouTube</h3>
                    <p>35.2M</p>
                    <span>+2.1M this month</span>
                </div>
                <div className="card">
                    <Instagram size={32} />
                    <h3>Instagram</h3>
                    <p>8.7M</p>
                    <span>+450K this month</span>
                </div>
                <div className="card">
                    <Twitter size={32} />
                    <h3>Twitter</h3>
                    <p>2.3M</p>
                    <span>+120K this month</span>
                </div>
                <div className="card">
                    <Facebook size={32} />
                    <h3>Facebook</h3>
                    <p>4.1M</p>
                    <span>+80K this month</span>
                </div>
            </div>

            <div className="achievements">
                <h3>Overall Achievements</h3>
                <div className="achievement-stats">
                    <div className="stat">
                        <Eye size={32} />
                        <p>5.2B+</p>
                        <span>Total Views</span>
                    </div>
                    <div className="stat">
                        <Heart size={32} />
                        <p>450M+</p>
                        <span>Total Likes</span>
                    </div>
                    <div className="stat">
                        <MessageSquare size={32} />
                        <p>25M+</p>
                        <span>Comments</span>
                    </div>
                    <div className="stat">
                        <Users size={32} />
                        <p>50M+</p>
                        <span>Total Reach</span>
                    </div>
                </div>
            </div>

            <div className="social-icons">
                <p>Follow us on your favorite platform to stay updated with the latest experiments!</p>
                <div className="icons">
                    <Youtube />
                    <Instagram />
                    <Twitter />
                    <Facebook />
                </div>
            </div>
        </section>
    );
};

export default SocialImpact;
