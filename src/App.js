import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import CanvasBackground from "./canvas/CanvasBackground";

function App() {
  return (
    <div className="App">
      <CanvasBackground />
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
