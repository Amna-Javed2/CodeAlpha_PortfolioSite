import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => {
        const isInProgress = project.status === "in-progress";
        return (
          <article key={project.id}>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <p className="image-placeholder">Coming Soon</p>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}

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
            <hr />
          </article>
        );
      })}
    </section>
  );
}

export default Projects;
