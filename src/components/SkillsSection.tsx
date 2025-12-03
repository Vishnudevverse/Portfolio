import { memo, useCallback } from "react";

interface Skill {
  name: string;
  category: string;
  link: string;
  imageUrl: string;
}

interface SkillsSectionProps {
  skillsData: Skill[];
}

const SkillsSection = memo(function SkillsSection({ skillsData }: SkillsSectionProps) {
  const handleSkillClick = useCallback((link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, link: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkillClick(link);
    }
  }, [handleSkillClick]);

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`}
            onClick={() => handleSkillClick(skill.link)}
            className="skill-item"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, skill.link)}
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
});

export { SkillsSection };