import React, { useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, profile } from "../../../data/portfolioData";
import "./Navbar.css";

const Navbar = ({ theme, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profile.resumePDF;
    link.setAttribute("download", "Aditya Kumar Sahu.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Aditya portfolio home">
          <span>AS</span>
          <strong>Aditya</strong>
        </a>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onThemeToggle} aria-label="Toggle day night theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button className="resume-button" type="button" onClick={handleDownload}>
            <FiDownload />
            Resume
          </button>
          <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
