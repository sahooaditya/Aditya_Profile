import React from "react";
import "./Hero.css";
import Logo from "../../assets/images/Aditya.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import hero from "../../assets/images/hero.jpg";
import BoobleCreate from "../Booble/BoobleCreate";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <BoobleCreate />
      <div className="hero-content">
        <h2>React Fronted Developer</h2>
        <p>
          "Hello! 👋 I'm Aditya Kumar Sahu, Frontend Developer with 4+ years of experience
          specializing in React.js and Next.js. Skilled in building responsive, highperformance web
          applications using modern JavaScript (ES6+), HTML5, CSS3, and SCSS. Experienced in
          translating UI/UX designs into clean, reusable components, optimizing performance, and
          integrating REST APIs. Strong understanding of component-based architecture, state
          management, and best coding practices. Passionate about writing scalable code and
          delivering user-friendly digital experiences.
          <b style={{ color: "#96b951" }}> I am actively seeking new job opportunities."</b>
        </p>
      </div>
      <div className="hero-img">
        <div>
          {/* <div className="tech-icon">
            <img src={js} alt="" />
          </div> */}
          <img src={Logo} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-typescript-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-html5-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-css3-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-sass-original colored"></i>
          </div>
        </div>
        <div>
          <div className="tech-icon">
            <i class="devicon-react-original colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-axios-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-redux-original colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-bootstrap-plain colored"></i>
          </div>
          <div className="tech-icon">
            <i class="devicon-tailwindcss-plain colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
