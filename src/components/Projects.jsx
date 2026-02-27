import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <img src={project.image} alt={project.title} />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tags">
                {project.tools.map((tool) => (
                  <span key={tool} className="tag">{tool}</span>
                ))}
              </div>
              <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
