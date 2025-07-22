import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experiments.scss";

const videos = [
  "https://www.youtube.com/embed/ey3tAUyVCi8",
  "https://www.youtube.com/embed/fr0U4VOhZ0c",
  "https://www.youtube.com/embed/sTeNcFYyMRw",
  "https://www.youtube.com/embed/eOY53XPKUgc",
  "https://www.youtube.com/embed/DUEgm-uxR0s",
  "https://www.youtube.com/embed/Fryh6Uz3TAk",
];

const Experiments = () => {
  const [index, setIndex] = useState(0);

  const rotateStack = (dir) => {
    setIndex((prev) =>
      dir === "up" ? (prev + 1) % videos.length : (prev - 1 + videos.length) % videos.length
    );
  };

  const getVideo = (offset) => {
    return videos[(index + offset + videos.length) % videos.length];
  };

  return (
    <section className="experiments-stack">
      <h2 className="section-heading">Our Crazy Experiments</h2>
      <p className="section-subtitle">Where creativity meets science.</p>

      <div className="stack-container">
        <motion.div className="card back" key={getVideo(2)}>
          <iframe src={getVideo(2)} allowFullScreen></iframe>
        </motion.div>
        <motion.div className="card middle" key={getVideo(1)}>
          <iframe src={getVideo(1)} allowFullScreen></iframe>
        </motion.div>
        <motion.div className="card front" key={getVideo(0)}>
          <iframe src={getVideo(0)} allowFullScreen></iframe>
        </motion.div>

        <div className="buttons">
          <button onClick={() => rotateStack("up")}>▲</button>
          <button onClick={() => rotateStack("down")}>▼</button>
        </div>
      </div>
    </section>
  );
};

export default Experiments;
