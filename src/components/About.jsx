import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const ref = useScrollAnimation();
  return (
    <section id="about" ref={ref} className="content-section fade-section">
      <h2>About</h2>
      <p>
        I'm Amna Javed, a Computer Science student and Frontend Developer based
        in Lahore, Pakistan. I build responsive, accessible web interfaces with
        HTML, CSS, JavaScript, and React.
      </p>
      <p>
        Currently interning as a Frontend Developer at CodeAlpha, building real
        projects while growing toward full-stack and AI engineering.
      </p>
    </section>
  );
}

export default About;
