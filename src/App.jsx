
import AboutSection from "./components/AboutSection";
import ApplyNow from "./components/ApplyNow/ApplyNow";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery/Gallery";
import HeroSection from "./components/HeroSection";
import Commonn from "./components/Meeting/Commonn";
import Navbar from "./components/Navbar";
import Common from "./components/ProgrammeStructure/Common";

function App() {
  return (
    <div className="App">
     <Navbar />
      <HeroSection />
       <AboutSection /> 
       <Gallery/>
       <Common/>
      <Commonn/>
      <Contact/>
      <ApplyNow/>
      <Footer />
    </div>
  );
}

export default App;
