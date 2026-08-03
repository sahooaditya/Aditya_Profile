import React from "react";
import { FiDatabase, FiGitBranch, FiMonitor, FiServer } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { exploreTech } from "../../../data/portfolioData";
import "./Explore.css";

const icons = [<FiMonitor />, <FiServer />, <FiDatabase />, <FiGitBranch />];

const Explore = () => {
  return (
    <section className="explore-section motion-section section-frame" id="explore">
      <SectionHeading
        eyebrow="Explore"
        title="Technology I use now and the full-stack path I am building."
        text="This section highlights the practical technology areas behind the portfolio: frontend craft, backend growth, database workflows, and shipping habits."
      />
      <div className="explore-grid">
        {exploreTech.map((group, index) => (
          <article className="explore-card" key={group.title}>
            <div className="explore-icon">{icons[index]}</div>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
            <div className="explore-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
