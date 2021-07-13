// Stylesheets
import "./ProjectsSection.css";

// Data
import { PROJECTS } from "../../content/data";

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <header>
        <h2 className="heading">Projects</h2>
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
