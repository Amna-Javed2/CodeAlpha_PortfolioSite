import { skills } from "../data/skills";
import "./Skills.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Skills() {
  const ref = useScrollAnimation();
  return (
    <section id="skills" ref={ref} className="fade-section">
      <h2>Skills Section</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill.id}>{skill.name}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills;
