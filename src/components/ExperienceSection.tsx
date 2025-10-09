import React from "react";

export function ExperienceSection({ experienceData }) {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="section">
        {experienceData.map((experience, index) => (
          <div key={index} className="card experience-item">
            <div className="experience-meta">
              <h3 className="card-title">{experience.title}</h3>
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