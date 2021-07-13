// Stylesheet
import "./App.css";

// Components
import LandingSection from "./components/LandingSection/LandingSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

const App = () => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
};

export default App;
