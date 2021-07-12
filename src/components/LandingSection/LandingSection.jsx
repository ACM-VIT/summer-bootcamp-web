// Stylesheets
import "./LandingSection.css";

// Assets
import Illustration from "../../assets/vectors/landing.svg";

const LandingSection = () => {
  return (
    <section>
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#landing">Home</a>
            </li>
            <li className="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-link contact">
              <a href="mailto:johndoe@gmail.com">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="landing">
        <article>
          <h2 className="main-heading">
            Hey, I am <span className="orange">John Doe</span>
          </h2>
          <h3 className="sub-heading">
            I am a <span className="green">MERN Stack Developer</span>
          </h3>
        </article>
        <img src={Illustration} alt="Illustration" height="300" />
      </main>
    </section>
  );
};

export default LandingSection;
