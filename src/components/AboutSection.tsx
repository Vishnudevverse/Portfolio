interface AboutSectionProps {
  aboutText: string;
}

export function AboutSection({ aboutText }: AboutSectionProps) {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">{aboutText}</p>
    </section>
  );
}