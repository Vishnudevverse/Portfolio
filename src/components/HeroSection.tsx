import { Mail, Linkedin, Github, FileText } from "lucide-react";

interface HeroSectionProps {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    linkedin?: string;
    github?: string;
    resume?: string;
  };
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  if (!personalInfo) {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <div>
            <div style={{height: '3rem', background: '#333', borderRadius: '0.5rem', marginBottom: '1rem'}}></div>
            <div style={{height: '2rem', background: '#333', borderRadius: '0.5rem', width: '80%'}}></div>
          </div>
          <div className="hero-buttons">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{height: '3rem', width: '8rem', background: '#333', borderRadius: '0.5rem'}}></div>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div style={{width: '300px', height: '300px', background: '#333', borderRadius: '50%'}}></div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
        </div>

        <div className="hero-buttons">
          <a href={`mailto:${personalInfo.email}`} className="btn">
            <Mail size={16} />
            Get In Touch
          </a>
          
          <a 
            href={personalInfo.linkedin !== "[Your LinkedIn URL]" ? personalInfo.linkedin : "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          
          <a 
            href={personalInfo.github !== "[Your GitHub URL]" ? personalInfo.github : "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <Github size={16} />
            GitHub
          </a>
          
          <a 
            href={personalInfo.resume || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-container">
          <img
            src="/images/user.webp"
            alt="Vishnuvarthan - Full Stack Developer"
          />
        </div>
      </div>
    </section>
  );
}