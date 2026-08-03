import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Loader from "./components/common/Loader/Loader";
import MouseFollower from "./components/common/MouseFollower/MouseFollower";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Explore from "./components/sections/Explore/Explore";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".site-main",
            start: "top 74%",
          },
        },
      );

      gsap.utils.toArray(".motion-section").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          },
        );
      });

      gsap.to(".grid-layer", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".app-shell",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-portrait-card", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app-shell">
      <MouseFollower />
      <div className="background-media" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="line-art" aria-hidden="true" />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main className="site-main">
        <Hero />
        <About />
        <Skills />
        <Explore />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
