import React from "react";

export function AboutSection({ aboutText }) {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">{aboutText}</p>
    </section>
  );
}