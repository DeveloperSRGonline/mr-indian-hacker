import React from "react";
import "./SocialImpact.scss";
import {
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Eye,
  Heart,
  MessageSquare,
  Users,
} from "lucide-react";

const SocialImpact = () => {
  return (
    <section className="social-impact">
      <h2>Social Media Impact</h2>
      <p>Join millions of science enthusiasts across all platforms</p>

      <div className="social-cards">
        <div className="card-1 card">
          <Youtube size={32} />
          <h3>YouTube</h3>
          <p>46.2M+</p>
          <span>Subscribers</span>
        </div>
        <div className="card card-2">
          <Instagram size={32} />
          <h3>Instagram</h3>
          <p>5.3M+</p>
          <span>Followers</span>
        </div>
        <div className="card card-3">
          <Twitter size={32} />
          <h3>Twitter</h3>
          <p>26.8K+</p>
          <span>Followers</span>
        </div>
        <div className="card card-4">
          <Facebook size={32} />
          <h3>Facebook</h3>
          <p>3M+</p>
          <span>Followers</span>
        </div>
      </div>

      <div className="achievements">
        <h3>Overall Achievements</h3>
        <div className="achievement-stats">
          <div className="stat">
            <Eye size={32} />
            <p>8.3B+</p>
            <span>Total Views</span>
          </div>
          <div className="stat">
            <Heart size={32} />
            <p>322M+</p>
            <span>Total Likes</span>
          </div>
          <div className="stat">
            <MessageSquare size={32} />
            <p>13.6M+</p>
            <span>Comments</span>
          </div>
          <div className="stat">
            <Users size={32} />
            <p>60M+</p>
            <span>Total Reach</span>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <p>
          Follow us on your favorite platform to stay updated with the latest
          experiments!
        </p>
        <div className="icons">
          <a
            href="https://www.youtube.com/@MrIndianHacker"
            target="_blank"
          >
            <Youtube />
          </a>
          <a
            href="https://www.instagram.com/dilraj_singh_rawat?utm_source=ig_web_button_share_sheet"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            href="https://x.com/MR_INDIANHACKER"
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            href="https://www.facebook.com/mrindianhacker00/"
            target="_blank"
          >
            <Facebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
