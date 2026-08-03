import React from "react";
import { profile } from "../../../data/portfolioData";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>Designed and built by {profile.name}</p>
      <a href="#home">Back to top</a>
    </footer>
  );
};

export default Footer;
