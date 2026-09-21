import { skills } from "../data/skills"
import "./Skills.css"

function Skills() {
  return (
    <section id="skills">
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
