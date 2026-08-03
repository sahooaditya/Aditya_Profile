import React from "react";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import "./About.css";

const About = () => {
  const cards = [
    { icon: <FiLayers />, title: "Component-first", text: "Reusable sections, shared UI pieces, and clean folder boundaries." },
    { icon: <FiCpu />, title: "Fast interactions", text: "Smooth scroll reveal, parallax motion, hover states, and optimized visual rhythm." },
    { icon: <FiCode />, title: "Production mindset", text: "Responsive layouts, Firebase forms, readable data files, and practical content." },
  ];

  return (
    <section className="about-section motion-section section-frame" id="about">
      <SectionHeading
        eyebrow="About"
        title="I turn UI ideas into reliable React experiences."
        text="My work focuses on frontend systems that look sharp, stay maintainable, and feel natural across desktop, tablet, and mobile."
      />
      <div className="about-grid">
        {cards.map((card) => (
          <article className="about-card" key={card.title}>
            <span>{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
