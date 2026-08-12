import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { freelanceProjects, projects } from "../../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section motion-section section-frame" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Project ideas and freelance-ready solutions with business value."
        text="These cards show the kind of frontend and full-stack work I can deliver for companies, founders, agencies, and personal brands."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title} data-cursor="Open">
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

      <div className="freelance-showcase">
        <div className="freelance-heading">
          <span>Freelance Services</span>
          <h3>Client-focused project content for portfolio, startup, and business websites.</h3>
        </div>
        <div className="freelance-grid">
          {freelanceProjects.map((project) => (
            <article className="freelance-card" key={project.title} data-cursor="Hire">
              <small>{project.category}</small>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <strong>{project.outcome}</strong>
              <div className="tag-cloud">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
