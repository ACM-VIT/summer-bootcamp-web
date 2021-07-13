import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./ProjectsSection.css";

// Data
import { PROJECTS } from "../../content/data";

const ProjectsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#proj-heading", {
      scrollTrigger: "#proj-heading",
      opacity: 1,
      duration: 2,
      delay: 3.5,
    })
      .from("#proj-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to(".proj-cont", {
        scrollTrigger: ".proj-cont",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from(".proj-cont", {
        y: 100,
        duration: 2,
        delay: -2,
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Projects
        </h2>
      </header>
      <main>
        <article className="proj-cont">
          {PROJECTS.map(({ title, desc, img, link }, i) => (
            <a
              target="_blank"
              rel="noreferrer nooopener"
              href={link}
              className="proj"
              key={i}
            >
              <img src={img} alt="Project Screenshot" className="proj-img" />
              <h3 className="proj-heading orange">{title}</h3>
              <p className="proj-desc">{desc}</p>
            </a>
          ))}
        </article>
      </main>
    </section>
  );
};

export default ProjectsSection;
