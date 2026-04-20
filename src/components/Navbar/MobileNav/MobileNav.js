import React from "react";
import "./MobileNav.css";
// import Logo from "../../../assets/images/ad.jpeg";
import resumePDF from "../../../assets/images/Aditya Kumar Sahu.pdf";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.setAttribute("download", "Aditya Kumar Sahu.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <div className="logos">AdiTya</div>

          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skill" className="menu-item">
                Skills
              </a>{" "}
            </li>
            <li>
              <a href="#Experience" className="menu-item">
                Work Experience
              </a>{" "}
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={handleDownload}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
