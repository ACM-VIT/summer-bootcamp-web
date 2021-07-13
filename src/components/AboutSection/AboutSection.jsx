import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#about-heading", {
      scrollTrigger: "#about-heading",
      opacity: 1,
      duration: 2,
      delay: 2,
    })
      .from("#about-heading", {
        scrollTrigger: "#about-heading",
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to("#about-content", {
        scrollTrigger: "#about-content",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from("#about-content", {
        scrollTrigger: "#about-content",
        x: -100,
        duration: 2,
        delay: -2,
      });
  }, []);

  return (
    <section className="about" id="about">
      <header>
        <h2 className="heading" id="about-heading">
          About Me
        </h2>
      </header>
      <main>
        <p className="text" id="about-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          quo ea, modi laudantium quisquam dolorem deserunt adipisci! Neque amet
          recusandae optio, iste ipsum reiciendis iure sunt fugit ducimus quos,
          libero dolorum error excepturi debitis quaerat suscipit tenetur hic
          provident corporis aut explicabo! Culpa laboriosam, rerum dignissimos
          odit magnam dolore reprehenderit omnis nesciunt minus labore unde
          recusandae blanditiis impedit officiis, velit consequatur eaque
          pariatur fuga, corrupti ut minima eius? Consectetur, sapiente nemo a
          voluptatem voluptatibus, vel cum tenetur id sed enim ad vitae, quasi
          totam eum maxime incidunt magnam! Autem recusandae aliquam deserunt
          doloribus consectetur voluptate odio modi reiciendis magnam
          temporibus?
        </p>
      </main>
    </section>
  );
};

export default AboutSection;
