import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import CanvasBackground from "./canvas/CanvasBackground";
import UpperLeftBlob from "./UpperLeftBlob";
import LowerRightBLob from "./LowerRightBlob";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWarpSpeed, setIsWarpSpeed] = useState(true);
  const [speed, setSpeed] = useState(30);
  const [isInitailLoad, setIsInitailLoad] = useState(true);
  const heroLRBlob = useRef();
  const heroULBlob = useRef();
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView === true) {
        heroLRBlob.current.animateOut();
        heroULBlob.current.animateOut();
      } else {
        heroLRBlob.current.animateIn();
        heroULBlob.current.animateIn();
      }
    },
  });

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
        <>
          <div className="blobs-wrapper">
            <div className="blobs-wrapper-relative">
              <div className="blob-wrapper">
                <UpperLeftBlob
                  ref={heroULBlob}
                  wrapperClass={"blob-wrapper--ul"}
                />
              </div>
              <div className="blob-wrapper blob-wrapper--parent-lr">
                <LowerRightBLob
                  ref={heroLRBlob}
                  wrapperClass={"blob-wrapper--lr"}
                />
              </div>
            </div>
          </div>

          <div>
            <NavBar />
            <HeroSection />
            <div ref={ref} className="intersection-ref--hero"></div>
            <div className="container">
              <AboutSection />
            </div>
            <ExperienceSection />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
