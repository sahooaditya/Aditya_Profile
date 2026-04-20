import React, { useEffect, useState } from "react";
import "./BoobleC.css";
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "Bootstrap",
  "SCSS",
  "Axios",
  "REST API",
  "JWT",
  "Git",
  "GitHub",
  "SEO",
  "Debugging",
];
const BoobleCreate = () => {
  const [index, setIndex] = useState(0);

  // auto rotate every 1.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <body>
        <div className="wrapper">
          {skills.map((_, i) => (
            <div key={i}>
              <span className="dot"></span>
              <span className="bubble-text">{skills[(index + i) % skills.length]}</span>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
};

export default BoobleCreate;
