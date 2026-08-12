import React, { useEffect, useState } from "react";
import { FiArrowDownRight, FiBriefcase, FiMail, FiX } from "react-icons/fi";
import { profile } from "../../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isPreviewOpen]);

  return (
    <>
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
          <button
            className="hero-portrait-card"
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            aria-label="Open full image preview"
          >
            <img src={profile.heroImage} alt={profile.name} />
            <span className="preview-hint">Click to preview</span>
            <div className="status-card">
              <FiBriefcase />
              <div>
                <strong>{profile.role}</strong>
                <span>{profile.location}</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {isPreviewOpen ? (
        <div className="image-preview" role="dialog" aria-modal="true" aria-label="Full image preview">
          <button className="preview-backdrop" type="button" onClick={() => setIsPreviewOpen(false)} aria-label="Close image preview" />
          <div className="preview-frame">
            <button className="preview-close" type="button" onClick={() => setIsPreviewOpen(false)} aria-label="Close image preview">
              <FiX />
            </button>
            <img src={profile.heroImage} alt={profile.name} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
