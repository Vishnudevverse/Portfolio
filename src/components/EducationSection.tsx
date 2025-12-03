import { memo } from "react";

interface SemesterScore {
  semester: string;
  score: string;
}

interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  grade: string;
  semesterScores?: SemesterScore[];
}

interface EducationSectionProps {
  educationData: Education[];
}

const EducationSection = memo(function EducationSection({ educationData }: EducationSectionProps) {
  return (
    <section className="education-section">
      <h2 className="section-title">Education & Academic Performance</h2>
      
      <div className="education-grid">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{education.degree}</h3>
            {education.field && (
              <p className="education-field">{education.field}</p>
            )}
            
            <div>
              <p className="education-institution">{education.institution}</p>
              <p className="education-duration">{education.duration}</p>
              <p className="education-grade">{education.grade}</p>
            </div>
            
            {education.semesterScores && (
              <div className="semester-scores">
                <h4>Semester Performance:</h4>
                <div className="semester-grid">
                  {education.semesterScores.map((semester, semIndex) => (
                    <div key={semIndex} className="semester-item">
                      <span>{semester.semester}</span>
                      <span className="semester-score">{semester.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});

export { EducationSection };