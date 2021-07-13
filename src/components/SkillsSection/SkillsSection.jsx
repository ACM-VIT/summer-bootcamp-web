import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./SkillsSection.css";

// Data
import { SKILLS } from "../../content/data";

const SkillsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#skills-heading", {
      scrollTrigger: "#skills-heading",
      opacity: 1,
      duration: 2,
      delay: 4,
    })
      .from("#skills-heading", {
        scrollTrigger: "#skills-heading",
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to(".skill-cont", {
        scrollTrigger: ".skill-cont",
        opacity: 1,
        duration: 1.5,
        delay: -1,
      })
      .from(".skill-cont", {
        scrollTrigger: ".skill-cont",
        y: 100,
        duration: 1.5,
        delay: -1.5,
      })
      .from(".bar", {
        scrollTrigger: ".skill-cont",
        height: 0,
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <header>
        <h2 className="heading" id="skills-heading">
          Skills
        </h2>
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
