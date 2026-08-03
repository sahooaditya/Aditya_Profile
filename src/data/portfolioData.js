import heroImage from "../assets/images/Aditya.png";
import emailIcon from "../assets/images/email.png";
import githubIcon from "../assets/images/git.png";
import reactIcon from "../assets/images/tech.png";
import uiIcon from "../assets/images/ux-ui.png";
import apiIcon from "../assets/images/api.png";
import performanceIcon from "../assets/images/stock-market.png";
import toolsIcon from "../assets/images/soft.png";
import resumePDF from "../assets/images/Aditya Kumar Sahu.pdf";

export const profile = {
  name: "Aditya Kumar Sahu",
  role: "React.js Frontend Developer",
  heroImage,
  resumePDF,
  email: "sahooaditya370@gmail.com",
  github: "https://github.com/sahooaditya",
  location: "India / Remote",
  summary:
    "Frontend developer with 4+ years of experience building responsive, fast, production-ready React and Next.js interfaces.",
  highlights: ["4+ years experience", "React + Next.js", "Firebase contact flow", "Available for frontend roles"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
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
    description: "REST APIs, Firebase workflows, async states, form validation, and error handling.",
    stack: ["REST", "Axios", "Fetch", "Firebase", "JWT"],
    level: 86,
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
      "Contributed to database-backed web application features and reusable interface modules.",
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
    type: "Realtime Lead Capture",
    description:
      "A polished contact flow that validates input, shows loading states, and stores messages in Firebase Firestore.",
    tags: ["Firebase", "Firestore", "Forms", "UX"],
  },
];

export const contactCards = [
  { label: "Email", value: profile.email, icon: emailIcon, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.github, icon: githubIcon, href: profile.github },
];
