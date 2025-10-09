import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin, FileText } from "lucide-react";

export function ContactSection({ personalInfo }) {
  if (!personalInfo) {
    return (
      <section className="contact-section">
        <div className="contact-intro">
          <div style={{height: '2rem', background: '#333', borderRadius: '0.5rem', width: '300px', margin: '0 auto'}}></div>
          <div style={{height: '1rem', background: '#333', borderRadius: '0.5rem', width: '500px', margin: '1rem auto'}}></div>
        </div>
        <div className="contact-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{height: '8rem', background: '#333', borderRadius: '1rem'}}></div>
          ))}
        </div>
      </section>
    );
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin !== "[Your LinkedIn URL]" ? personalInfo.linkedin : "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: personalInfo.github !== "[Your GitHub URL]" ? personalInfo.github : "#",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download my CV",
      href: personalInfo.resume || "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-intro">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities,
          interesting projects, or just having a chat about
          technology and development.
        </p>
      </div>

      <div className="contact-grid">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const isClickable = item.href && item.href !== "#";

          const ContactItem = isClickable ? 
            <a key={index} href={item.href} className="contact-item">
              <div className="contact-icon">
                <Icon />
              </div>
              <div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </a> :
            <div key={index} className="contact-item">
              <div className="contact-icon">
                <Icon />
              </div>
              <div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </div>;

          return ContactItem;
        })}
      </div>

      <div className="contact-cta">
        <h3>
          <Mail size={20} />
          Let's Connect
        </h3>
        <p>
          Ready to start a conversation? Drop me a line
          and let's discuss how we can work together.
        </p>
        
        <div className="contact-buttons">
          <a href={`mailto:${personalInfo.email}`} className="btn">
            <Mail size={16} />
            Send Email
          </a>
          
          <a href={`tel:${personalInfo.phone}`} className="btn">
            <Phone size={16} />
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
}