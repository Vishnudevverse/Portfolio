import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, FileText, Send } from "lucide-react";

interface ContactSectionProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    location_link?: string;
    linkedin?: string;
    github?: string;
    resume?: string;
  };
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission (replace with actual API call)
    try {
      // For now, this will open the default email client with the form data
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 3000);
      }, 500);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
      href: personalInfo.location_link || "#",
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

      <div className="contact-content-wrapper">
        <div className="contact-details">
          <div className="contact-grid">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const isClickable = item.href && item.href !== "#";

              const ContactItem = isClickable ? (
                <a key={index} href={item.href} className="contact-item">
                  <div className="contact-icon">
                    <Icon />
                  </div>
                  <address>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </address>
                </a>
              ) : (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <Icon />
                  </div>
                  <address>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </address>
                </div>
              );

              return ContactItem;
            })}
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send Me a Message</h3>
            <p className="form-description">
              Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                disabled={formStatus === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                disabled={formStatus === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Collaboration"
                disabled={formStatus === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
                rows={6}
                disabled={formStatus === "sending"}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-submit"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {formStatus === "success" && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {formStatus === "error" && (
              <div className="form-message error">
                Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}