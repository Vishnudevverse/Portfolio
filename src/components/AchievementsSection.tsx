interface CompetitiveProgramming {
  title: string;
  items: string[];
}

interface CertificationAward {
  title: string;
  organization?: string;
  date: string;
  description: string;
}

interface AchievementsSectionProps {
  competitiveProgrammingData: CompetitiveProgramming[];
  certificationsAwardsData: CertificationAward[];
}

export function AchievementsSection({ competitiveProgrammingData, certificationsAwardsData }: AchievementsSectionProps) {
  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      
      <div className="achievements-grid">
        <div className="achievement-category">
          <h3>Competitive Programming</h3>
          <div>
            {competitiveProgrammingData.map((achievement, index) => (
              <div key={index}>
                {achievement.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="achievement-item">
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-desc">{item}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-category">
          <h3>Certifications & Awards</h3>
          <div>
            {certificationsAwardsData.map((cert, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-title">{cert.title}</div>
                {cert.organization && (
                  <div className="achievement-org">{cert.organization}</div>
                )}
                {cert.date && (
                  <div className="achievement-date">{cert.date}</div>
                )}
                {cert.description && (
                  <div className="achievement-desc">{cert.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}