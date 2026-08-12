import React from "react";
import { FiArrowDownRight, FiBriefcase, FiMail } from "react-icons/fi";
import { profile } from "../../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section section-frame" id="home">
      <div className="hero-copy">
        <span className="eyebrow" data-animate="top">
          React + Next.js Portfolio
        </span>
        <h1 data-animate="left">
          Building polished web interfaces that feel fast, clear, and alive.
        </h1>
        <p data-animate="right">{profile.summary}</p>
        <div className="hero-actions" data-animate="bottom">
          <a className="primary-link" href="#contact">
            <FiMail />
            Contact Me
          </a>
          <a className="ghost-link" href="#projects">
            View Work
            <FiArrowDownRight />
          </a>
        </div>
        <div className="highlight-row" data-animate="bottom" data-delay="0.12">
          {profile.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" data-animate="right">
        <div className="hero-portrait-card">
          <img src={profile.heroImage} alt={profile.name} />
          <div className="status-card">
            <FiBriefcase />
            <div>
              <strong>{profile.role}</strong>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
