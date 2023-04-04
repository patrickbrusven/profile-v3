import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import CanvasBackground from "./canvas/CanvasBackground";
import { useEffect, useState } from "react";

function App() {
  const [isWarpSpeed, setIsWarpSpeed] = useState(false);

  function toggleWarpSpeed() {
    setIsWarpSpeed((current) => !current);
  }

  useEffect(() => {
    window.addEventListener("click", toggleWarpSpeed);
  }, []);
  return (
    <div className="App">
      <CanvasBackground isWarpSpeed={isWarpSpeed} />
      <NavBar />
      <HeroSection />
      <div className="container">
        <AboutSection />
      </div>
      <ExperienceSection />
    </div>
  );
}

export default App;
