import { Github } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  githubUrl?: string;
}

interface ExperienceSectionProps {
  experienceData: Experience[];
}

export function ExperienceSection({ experienceData }: ExperienceSectionProps) {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="section">
        {experienceData.map((experience, index) => (
          <div key={index} className="card experience-item">
            <div className="experience-meta">
              <div className="experience-header">
                <h3 className="card-title">{experience.title}</h3>
                {experience.githubUrl && (
                  <a href={experience.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
              <div className="experience-company">{experience.company}</div>
              <div className="experience-duration">
                {experience.duration} • {experience.location}
              </div>
            </div>
            
            <ul className="experience-points">
              {experience.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}