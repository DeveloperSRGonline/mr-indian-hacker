import React from 'react';
import './Experiments.scss';

const videos = [
  "https://www.youtube.com/embed/ey3tAUyVCi8",
  "https://www.youtube.com/embed/fr0U4VOhZ0c",
  "https://www.youtube.com/embed/sTeNcFYyMRw",
  "https://www.youtube.com/embed/eOY53XPKUgc", 
  "https://www.youtube.com/embed/DUEgm-uxR0s",
  "https://www.youtube.com/embed/Fryh6Uz3TAk",
];

const Experiments = () => {
    return (
        <section className="experiments-section">
            <h2 className="section-heading">Our Crazy Experiments</h2>
            <p className="section-subtitle">Where creativity meets science.</p>
            <div className="video-grid">
                {videos.map((url, index) => (
                    <div className="video-card" key={index}>
                        <div className="video-border"></div>
                        <div className="video-wrapper">
                            <iframe src={url} title={`video-${index}`} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                ))}
            </div>
            <button className="load-more">Load More</button>
        </section>
    );
};

export default Experiments;
