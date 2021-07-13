import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./LandingSection.css";

// Assets
import Illustration from "../../assets/vectors/landing.svg";

const LandingSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".main-heading", {
      opacity: 1,
      duration: 1.5,
    })
      .from(".main-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".sub-heading", {
        opacity: 1,
        delay: -1,
        duration: 1.5,
      })
      .from(".sub-heading", {
        x: -100,
        delay: -1.5,
        duration: 1.5,
      })
      .to(".landing-il", {
        opacity: 1,
        delay: -1,
        duration: 1.5,
      })
      .from(".landing-il", {
        y: 100,
        delay: -1.5,
        duration: 1.5,
      })
      .to(".navbar", {
        opacity: 1,
        duration: 1.5,
      });
  }, []);

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
        <img src={Illustration} alt="Illustration" className="landing-il" />
        <a data-scroll href="#about" className="chevron">
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </a>
      </main>
    </section>
  );
};

export default LandingSection;
