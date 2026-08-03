import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="loader-orbit" aria-label="Portfolio loading">
        <span />
        <span />
        <span />
        <strong>AS</strong>
      </div>
      <p>Building smooth portfolio experience</p>
    </div>
  );
};

export default Loader;
