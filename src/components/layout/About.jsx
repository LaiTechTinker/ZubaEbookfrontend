import React from "react";
import "./About.css";
import { Features } from "../../utils/data";

const AboutSection = () => {
  return (
    <section className="about" id="Feature">
      <div className="about-glow"></div>

      <h2 className="about-title">
        Everything You Need to Create <span>Professional Ebooks</span>
      </h2>

      <p className="about-sub">
        Our platform equips creators with powerful tools to write, design, and
        publish stunning ebooks effortlessly.
      </p>

      <div className="about-grid">
        {Features.map((f, i) => (
          <div key={i} className="about-card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
