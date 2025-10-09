import React from "react";

export function SkillsSection({ skillsData }) {
  const handleSkillClick = (link, skillName) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e, link, skillName) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkillClick(link, skillName);
    }
  };

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`}
            onClick={() => handleSkillClick(skill.link, skill.name)}
            className="skill-item"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, skill.link, skill.name)}
            aria-label={`Learn more about ${skill.name}`}
          >
            <div className="skill-image">
              <img
                src={skill.imageUrl}
                alt={`${skill.name} logo`}
              />
            </div>
            
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}