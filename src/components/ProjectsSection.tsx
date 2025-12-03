import { ExternalLink, Github } from "lucide-react";
import { memo } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  projectsData: Project[];
}

const ProjectsSection = memo(function ProjectsSection({ projectsData }: ProjectsSectionProps) {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="section">
        {projectsData.map((project, index) => (
          <article key={index} className="card">
            <div className="project-header">
              <h3 className="card-title">{project.title}</h3>
              <div className="project-buttons">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
            
            <div className="card-content">
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export { ProjectsSection };