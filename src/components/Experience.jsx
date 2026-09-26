import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Experience() {
  const ref = useScrollAnimation();
  return (
    <section id="experience" ref={ref} className="content-section fade-section">
      <h2>Experience</h2>
      <article>
        <h3>Frontend Development Intern — CodeAlpha</h3>
        <span>Sep 2026 – Oct 2026</span>
        <p>
          Building responsive web applications (Portfolio, Calculator, Music
          Player) with React, TypeScript, and Tailwind CSS — reusable components
          and clean, accessible UI. Remote.
        </p>
      </article>
    </section>
  );
}

export default Experience;
