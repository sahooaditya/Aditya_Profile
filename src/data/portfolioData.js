import heroImage from "../assets/images/Aditya.png";
import emailIcon from "../assets/images/email.png";
import githubIcon from "../assets/images/git.png";
import reactIcon from "../assets/images/tech.png";
import uiIcon from "../assets/images/ux-ui.png";
import apiIcon from "../assets/images/api.png";
import performanceIcon from "../assets/images/stock-market.png";
import toolsIcon from "../assets/images/soft.png";
import managementIcon from "../assets/images/management.png";
import testingIcon from "../assets/images/testing.png";
import resumePDF from "../assets/images/Aditya Kumar Sahu.pdf";

export const profile = {
  name: "Aditya Kumar Sahu",
  role: "React.js Developer expanding into Full Stack",
  heroImage,
  resumePDF,
  email: "sahooaditya370@gmail.com",
  github: "https://github.com/sahooaditya",
  location: "India / Remote",
  summary:
    "Frontend-focused developer with 4+ years of experience building responsive React and Next.js products, now expanding deeper into full-stack development with Node.js, Firebase, APIs, databases, and deployment workflows.",
  highlights: ["4+ years experience", "React + Next.js", "Full-stack expanding", "Firebase + APIs", "Available for roles"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Explore", href: "#explore" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    title: "Frontend Engineering",
    icon: reactIcon,
    description: "React.js, Next.js, hooks, routing, reusable components, and scalable UI architecture.",
    stack: ["React", "Next.js", "JavaScript", "TypeScript", "Redux"],
    level: 92,
  },
  {
    title: "UI Craft",
    icon: uiIcon,
    description: "Responsive layouts, glass UI, micro-interactions, accessibility basics, and polished CSS systems.",
    stack: ["HTML5", "CSS3", "SCSS", "Tailwind", "Bootstrap"],
    level: 90,
  },
  {
    title: "API Integration",
    icon: apiIcon,
    description: "REST APIs, Firebase workflows, async states, authentication patterns, validation, and error handling.",
    stack: ["REST", "Axios", "Fetch", "Firebase", "JWT", "Postman"],
    level: 86,
  },
  {
    title: "Full Stack Growth",
    icon: managementIcon,
    description: "Learning and building backend features with Node.js, Express, database models, and API-first architecture.",
    stack: ["Node.js", "Express.js", "MongoDB", "Firestore", "Auth"],
    level: 74,
  },
  {
    title: "Performance",
    icon: performanceIcon,
    description: "Lazy loading, image optimization, clean state updates, and responsive performance tuning.",
    stack: ["SEO", "Lazy Load", "Memoization", "DevTools"],
    level: 82,
  },
  {
    title: "Tooling",
    icon: toolsIcon,
    description: "Git workflows, npm, debugging, clean component boundaries, and maintainable project structure.",
    stack: ["Git", "GitHub", "npm", "ESLint", "VS Code"],
    level: 85,
  },
  {
    title: "Quality & Testing",
    icon: testingIcon,
    description: "Debugging, browser testing, form edge cases, API checks, and release-ready UI verification.",
    stack: ["DevTools", "Jest", "Manual QA", "Error States"],
    level: 78,
  },
];

export const exploreTech = [
  {
    title: "Frontend",
    text: "React.js, Next.js, reusable components, responsive layouts, animations, route-based screens, and pixel-polished UI delivery.",
    items: ["React.js", "Next.js", "Redux Toolkit", "GSAP", "Material UI", "Tailwind CSS"],
  },
  {
    title: "Backend",
    text: "Expanding into backend services with clean REST endpoints, validation, authentication, and reusable server logic.",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware", "Postman"],
  },
  {
    title: "Database & Cloud",
    text: "Building data flows with Firebase today and growing toward database design, CRUD APIs, and deployment-ready systems.",
    items: ["Firebase", "Firestore", "MongoDB", "Cloud Storage", "Hosting", "Environment Config"],
  },
  {
    title: "Workflow",
    text: "Comfortable shipping with Git, GitHub, npm scripts, debugging tools, responsive checks, and performance improvements.",
    items: ["Git", "GitHub", "npm", "ESLint", "Chrome DevTools", "Deployment"],
  },
];

export const experiences = [
  {
    role: "React.js Software Developer",
    company: "QSImpACT",
    period: "April 2024 - Present",
    location: "United Kingdom / Remote",
    points: [
      "Built scalable frontend applications with React.js and Next.js for enterprise workflows.",
      "Created reusable UI components with consistent loading, error, and responsive states.",
      "Worked with API-driven modules and full-stack handoff points to connect frontend screens with backend services.",
      "Improved page speed through image optimization, code splitting, and clean rendering patterns.",
    ],
  },
  {
    role: "React Developer",
    company: "Nativebyte Software LLP",
    period: "January 2023 - March 2024",
    location: "Delhi / Odisha",
    points: [
      "Integrated REST APIs with Axios and Fetch for data-heavy product screens.",
      "Managed complex state with Redux, Context API, and route-driven interfaces.",
      "Handled form flows, request payloads, response mapping, and practical API debugging with backend teams.",
      "Worked on Google Maps API delivery tracking with live route and rider visibility.",
    ],
  },
  {
    role: "Software Developer",
    company: "DivineAI Pvt. Ltd.",
    period: "August 2021 - December 2022",
    location: "Bhubaneswar / Odisha",
    points: [
      "Developed responsive React interfaces and mentored interns on frontend practices.",
      "Debugged UI flows, improved performance, and supported API-driven deployment work.",
      "Contributed to database-backed web application features, reusable interface modules, and CRUD-style workflows.",
    ],
  },
];

export const projects = [
  {
    title: "Delivery Tracking Dashboard",
    type: "Maps + Logistics",
    description:
      "A responsive tracking interface with Google Maps API, live delivery states, route visibility, and clean operational UI.",
    tags: ["React", "Google Maps", "API", "Responsive"],
  },
  {
    title: "Enterprise Web Modules",
    type: "SaaS Frontend",
    description:
      "Reusable Next.js screens built for performance, clean data states, and consistent component-driven delivery.",
    tags: ["Next.js", "SSR", "Components", "SEO"],
  },
  {
    title: "Firebase Portfolio Contact",
    type: "Full Stack Lead Capture",
    description:
      "A polished contact flow that validates input, shows loading states, and stores messages in Firebase Firestore like a lightweight full-stack feature.",
    tags: ["Firebase", "Firestore", "Forms", "Full Stack"],
  },
  {
    title: "Full Stack Learning Lab",
    type: "Backend Expansion",
    description:
      "Practice modules focused on Node.js APIs, authentication thinking, database schemas, and deployable React-to-backend flows.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];

export const contactCards = [
  { label: "Email", value: profile.email, icon: emailIcon, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.github, icon: githubIcon, href: profile.github },
];
