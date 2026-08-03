import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { projects } from "../../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section motion-section section-frame" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work themes with clear business value."
        text="Portfolio content is written to highlight real frontend outcomes: tracking, enterprise modules, and reliable lead capture."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-count">0{index + 1}</span>
            <small>{project.type}</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-cloud">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <FiArrowUpRight className="project-icon" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
