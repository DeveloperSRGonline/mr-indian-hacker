import { useEffect, useState } from "react";
import "./Loader.css";
import loding from '../assets/videos/loding.mp4'

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);  // Start fade animation
    }, 3000); // After 3 seconds, start fade

    const hideTimer = setTimeout(() => {
      setHide(true);     // Fully hide after fade
    }, 4000); // 1s later (after fade completes)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;


  return (
      <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <video src={loding} autoPlay muted className="loader-video" />
    </div>
  );
};

export default Loader;

