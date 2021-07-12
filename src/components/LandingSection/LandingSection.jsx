// Stylesheets
import "./LandingSection.css";

// Assets
import Illustration from "../../assets/vectors/landing.svg";

const LandingSection = () => {
  return (
    <section id="landing">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a data-scroll href="#landing">
                Home
              </a>
            </li>
            <li data-scroll className="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link">
              <a data-scroll href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-link">
              <a data-scroll href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-link contact">
              <a data-scroll href="mailto:johndoe@gmail.com">
                Contact Me
              </a>
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
        <img src={Illustration} alt="Illustration" height="" />
        <div class="mouse_scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandingSection;
