import React from "react";
import "./Footer.css";
import face from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import linkdin from "../../assets/images/linkdin.png";
import git from "../../assets/images/git1.png";
import BoobleCreate from "../Booble/BoobleCreate";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          {/* <h3>Time To Program   ss</h3>
          <p>Connect with us on social media:</p> */}
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <img src={face} alt="" />
            </a>
            <a href="https://www.instagram.com">
              <img src={insta} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-sahu90/">
              <img src={linkdin} alt="" />
            </a>
            <a href="https://github.com/sahooaditya">
              <img src={git} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; 2026 Time To Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
