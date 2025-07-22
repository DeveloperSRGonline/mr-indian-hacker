import {
  HeroSection,
  AboutSection,
  Experiments,
  SocialImpact,
  Connect,
  Footer,
  Team,
} from "./Pages";

import { Navbar } from "./components";

function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Experiments />
      <AboutSection />
      <Team />
      <SocialImpact />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
