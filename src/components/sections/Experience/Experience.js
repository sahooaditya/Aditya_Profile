import React from "react";
import { FiMapPin } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { experiences } from "../../../data/portfolioData";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section motion-section section-frame" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Frontend work shaped by product needs and clean execution."
        text="Recent roles focused on React, Next.js, API-driven screens, performance, maps, and maintainable UI systems."
      />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <article
            className="timeline-card"
            key={`${experience.company}-${experience.period}`}
            data-animate={index % 2 === 0 ? "left" : "right"}
            data-delay={index * 0.08}
          >
            <div className="timeline-dot" />
            <div className="timeline-header">
              <div>
                <span>{experience.period}</span>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
              <small>
                <FiMapPin />
                {experience.location}
              </small>
            </div>
            <ul>
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
