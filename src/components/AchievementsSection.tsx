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
        <article className="achievement-category">
          <h3>Competitive Programming</h3>
          <div>
            {competitiveProgrammingData.map((achievement, index) => (
              <div key={index}>
                {achievement.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="achievement-item">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-desc">{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>

        <article className="achievement-category">
          <h3>Certifications & Awards</h3>
          <div>
            {certificationsAwardsData.map((cert, index) => (
              <div key={index} className="achievement-item">
                <h4 className="achievement-title">{cert.title}</h4>
                {cert.organization && (
                  <p className="achievement-org">{cert.organization}</p>
                )}
                {cert.date && (
                  <p className="achievement-date">{cert.date}</p>
                )}
                {cert.description && (
                  <p className="achievement-desc">{cert.description}</p>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}