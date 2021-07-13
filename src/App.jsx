// Stylesheet
import "./App.css";

// Components
import LandingSection from "./components/LandingSection/LandingSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

const App = () => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
};

export default App;
