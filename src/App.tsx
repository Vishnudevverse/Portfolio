import "./styles/portfolio.css";
import { getPortfolioData } from "./utils/dataUtils.ts";

// Section Components
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  const portfolioData = getPortfolioData();

  return (
    <div className="portfolio-app">
      {portfolioData.personalInfo && (
        <>
          <HeroSection personalInfo={portfolioData.personalInfo} />
          <div className="separator"></div>
        </>
      )}

      {portfolioData.personalInfo.about && (
        <>
          <AboutSection aboutText={portfolioData.personalInfo.about} />
          <div className="separator"></div>
        </>
      )}

      {portfolioData.skillsData.length > 0 && (
        <>
          <SkillsSection skillsData={portfolioData.skillsData} />
          <div className="separator"></div>
        </>
      )}

      {portfolioData.experienceData.length > 0 && (
        <>
          <ExperienceSection experienceData={portfolioData.experienceData} />
          <div className="separator"></div>
        </>
      )}

      {portfolioData.projectsData.length > 0 && (
        <>
          <ProjectsSection projectsData={portfolioData.projectsData} />
          <div className="separator"></div>
        </>
      )}

      {portfolioData.educationData.length > 0 && (
        <>
          <EducationSection educationData={portfolioData.educationData} />
          <div className="separator"></div>
        </>
      )}

      {(portfolioData.competitiveProgrammingData.length > 0 ||
        portfolioData.certificationsAwardsData.length > 0) && (
        <>
          <AchievementsSection
            competitiveProgrammingData={portfolioData.competitiveProgrammingData}
            certificationsAwardsData={portfolioData.certificationsAwardsData}
          />
          <div className="separator"></div>
        </>
      )}

      <ContactSection personalInfo={portfolioData.personalInfo} />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Vishnuvarthan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
