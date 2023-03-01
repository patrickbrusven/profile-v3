import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import UpperLeftBlob from "./UpperLeftBlob";
import LowerRightBLob from "./LowerRightBlob";
import ExperienceSection from "./ExperienceSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="background-blobs">
        <UpperLeftBlob
          wrapperClass={"background-blobs--upper-left"}
        ></UpperLeftBlob>
        <LowerRightBLob
          wrapperClass={"background-blobs--lower-right"}
        ></LowerRightBLob>
      </div>
      <HeroSection />
      <div className="container">
        <AboutSection />
      </div>
      <ExperienceSection />
    </div>
  );
}

export default App;
