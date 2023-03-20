import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";

function App() {
  return (
    <div className="App">
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
