import React from "react";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { skills } from "../../../data/portfolioData";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section motion-section section-frame" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Modern frontend stack with practical delivery habits."
        text="A balanced mix of React engineering, API integration, UI craft, and performance tuning."
      />
      <div className="skill-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-top">
              <img src={skill.icon} alt="" />
              <span>{skill.level}%</span>
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="progress-track">
              <span style={{ width: `${skill.level}%` }} />
            </div>
            <div className="tag-cloud">
              {skill.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
