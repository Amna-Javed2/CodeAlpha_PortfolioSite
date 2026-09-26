import { projects } from "../data/projects";
import "./Projects.css"
import useScrollAnimation from "../hooks/useScrollAnimation";

function Projects() {
  const ref = useScrollAnimation();
  return (
    <section id="projects" ref={ref} className="fade-section">
      <h2>Projects</h2>
      <div className="projects-grid">
      {projects.map((project) => {
        const isInProgress = project.status === "in-progress";
        return (
          <article key={project.id} className="project-card">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <p className="image-placeholder">Coming Soon</p>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
            </div>

            <a
              href={isInProgress ? undefined : project.liveLink}
              aria-disabled={isInProgress}
              tabIndex={isInProgress ? -1 : 0}
              className={isInProgress ? "disabled" : ""}
            >
              {isInProgress ? "Coming Soon" : "Live Demo"}
            </a>
            <a
              href={isInProgress ? undefined : project.repoLink}
              aria-disabled={isInProgress}
              tabIndex={isInProgress ? -1 : 0}
              className={isInProgress ? "disabled" : ""}
            >
              {isInProgress ? "Coming Soon" : "Github Repo"}
            </a>
          </article>
        );
      })}
      </div>
    </section>
  );
}

export default Projects;
