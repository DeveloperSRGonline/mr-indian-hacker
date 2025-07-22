import { Routes, Route } from "react-router-dom";
import {
  HeroSection,
  AboutSection,
  Experiments,
  Connect,
  Footer,
  Team,
  SocialImpact
} from "./Pages";

import { Navbar, Loader } from "./components";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Experiments />
            <AboutSection />
            <Team />
            <SocialImpact />
            <Connect />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}

export default App;
