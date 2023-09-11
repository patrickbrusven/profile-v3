import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import CanvasBackground from "./canvas/CanvasBackground";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWarpSpeed, setIsWarpSpeed] = useState(true);
  const [speed, setSpeed] = useState(30);
  const [isInitailLoad, setIsInitailLoad] = useState(true);

  function toggleWarpSpeed() {
    setIsWarpSpeed((current) => !current);
  }

  useEffect(() => {
    window.addEventListener("click", toggleWarpSpeed);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading((current) => !current);
      setSpeed(() => 2);
      toggleWarpSpeed();
      setIsInitailLoad(() => false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <CanvasBackground
        isWarpSpeed={isWarpSpeed}
        speed={speed}
        isInitailLoad={isInitailLoad}
      />
      {isLoading ? (
        <div className="load-animation">{/* <h1>PB</h1> */}</div>
      ) : (
        <div>
          <NavBar />
          <HeroSection />
          <div className="container">
            <AboutSection />
          </div>
          <ExperienceSection />
        </div>
      )}
    </div>
  );
}

export default App;
