// Stylesheets
import "./SkillsSection.css";

// Data
import { SKILLS } from "../../content/data";

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <header>
        <h2 className="heading">Skills</h2>
      </header>
      <main>
        <article className="skill-cont">
          {SKILLS.map(({ name, skill }, i) => (
            <div className="skill" key={i}>
              <div className="progress-bar">
                <div className="bar" style={{ height: `${skill}%` }} />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
};

export default SkillsSection;
