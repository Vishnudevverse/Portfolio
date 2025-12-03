import "./styles/portfolio.css";
import { getPortfolioData } from "./utils/dataUtils.ts";
import { lazy, Suspense, useMemo } from "react";

// Section Components - Lazy loaded for better performance
const HeroSection = lazy(() => import("./components/HeroSection").then(module => ({ default: module.HeroSection })));
const AboutSection = lazy(() => import("./components/AboutSection").then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import("./components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ExperienceSection = lazy(() => import("./components/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("./components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const EducationSection = lazy(() => import("./components/EducationSection").then(module => ({ default: module.EducationSection })));
const AchievementsSection = lazy(() => import("./components/AchievementsSection").then(module => ({ default: module.AchievementsSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(module => ({ default: module.ContactSection })));

// Loading component
const SectionLoader = () => (
  <div className="loading" style={{ minHeight: '200px', padding: '2rem' }}>
    Loading...
  </div>
);

function App() {
  const portfolioData = useMemo(() => getPortfolioData(), []);

  return (
    <div className="portfolio-app">
      <Suspense fallback={<SectionLoader />}>
        {portfolioData.personalInfo && (
          <>
            <HeroSection personalInfo={portfolioData.personalInfo} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {portfolioData.personalInfo.about && (
          <>
            <AboutSection aboutText={portfolioData.personalInfo.about} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {portfolioData.skillsData.length > 0 && (
          <>
            <SkillsSection skillsData={portfolioData.skillsData} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {portfolioData.experienceData.length > 0 && (
          <>
            <ExperienceSection experienceData={portfolioData.experienceData} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {portfolioData.projectsData.length > 0 && (
          <>
            <ProjectsSection projectsData={portfolioData.projectsData} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {portfolioData.educationData.length > 0 && (
          <>
            <EducationSection educationData={portfolioData.educationData} />
            <div className="separator"></div>
          </>
        )}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
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
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection personalInfo={portfolioData.personalInfo} />
      </Suspense>
    </div>
  );
}

export default App;
