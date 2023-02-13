import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="container">
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
