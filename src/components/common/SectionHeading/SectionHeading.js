import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ eyebrow, title, text }) => {
  return (
    <div className="section-heading">
      <span data-animate="top">{eyebrow}</span>
      <h2 data-animate="left">{title}</h2>
      {text ? <p data-animate="bottom">{text}</p> : null}
    </div>
  );
};

export default SectionHeading;
