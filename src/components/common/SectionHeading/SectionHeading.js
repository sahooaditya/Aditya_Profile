import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ eyebrow, title, text }) => {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
};

export default SectionHeading;
