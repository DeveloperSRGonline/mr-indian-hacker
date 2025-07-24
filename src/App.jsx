import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  HeroSection,
  AboutSection,
  Experiments,
  Connect,
  Footer,
  SocialImpact,
} from "./Pages";

import { Navbar, Loader } from "./components";
import LoginSignup from "./components/LoginModal";
import { CardCarousel } from "./components/ui/carousel";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Loader />
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {showLogin && <LoginSignup onClose={() => setShowLogin(false)} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Experiments />
              <AboutSection />
              <SocialImpact />
              <Connect />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}

export default App;
