export const profile = {
  name: "Shubham Bhadarage",
  role: "Software Engineer",
  summary:
    "Software Engineer with 2+ years of experience delivering scalable web applications across modern frontend architectures, full-stack environments, and CMS platforms. Proficient in building responsive user interfaces, developing robust REST APIs, and optimizing database workflows using TypeScript, JavaScript (ES6+), and the MERN stack. Adept at performance optimization, reusable component design, and delivering seamless digital solutions from concept to deployment. Available for immediate joining.",
  location: "Pune, India",
  phone: "+91-7620239098",
  email: "bhadarageshubham30@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1fc8ibQRVyNsVwJ8GL2gl62sZj8RGgIGr/view?usp=drive_link",
  links: {
    github: "https://github.com/Shubhamb13",
    linkedin: "https://www.linkedin.com/in/shubham-bhadarage-548708236/",
  },
};

export const metrics = [
  {
    value: "20+",
    label: "Responsive UI interfaces delivered",
  },
  {
    value: "30%",
    label: "Load speed optimization",
  },
  {
    value: "1000+",
    label: "Videos searchable in real-time",
  },
  {
    value: "40%",
    label: "User experience improvement",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Athang Infotech",
    location: "Pune, India",
    period: "Jun 2026 - Present",
    current: true,
    points: [
      "Developed 12+ full-stack features using React.js, Node.js, Express.js, and MongoDB, improving application functionality and user experience.",
      "Integrated and managed 18+ REST APIs with MongoDB, ensuring efficient data handling and reliable frontend-backend communication.",
      "Resolved 4+ application issues and optimized frontend/backend workflows, improving application performance and development efficiency.",
    ],
  },
  {
    role: "Trainee Engineer",
    company: "Walstar Pvt. Ltd",
    location: "Pune, India",
    period: "Jul 2024 - May 2026",
    current: false,
    points: [
      "Delivered 20+ responsive web interfaces with improved load speed by ~30%, ensuring smooth performance and cross-browser compatibility across major devices.",
      "Implemented and enhanced 15+ client-requested features, while resolving 25+ UI issues, leading to a noticeable 40% improvement in user experience and usability.",
      "Accelerated frontend proficiency by contributing to 10+ dynamic UI modules, improving development efficiency by ~35% and enabling a successful transition toward advanced frontend development practices.",
    ],
  },
  {
    role: "React.js Developer Intern",
    company: "Assetcues Pvt. Ltd",
    location: "Pune, India",
    period: "Jan 2024 - Mar 2024",
    current: false,
    points: [
      "Developed and optimized 10+ reusable UI components, reducing development time by ~30% and ensuring consistent design across the application.",
      "Designed and delivered a responsive asset tracking interface with 100% cross-device compatibility, improving user accessibility and engagement by ~25%.",
      "Integrated and managed dynamic data rendering for 20+ API endpoints, enhancing real-time data accuracy and boosting application performance by ~35%.",
    ],
  },
];

export const projects = [
  {
    title: "Smart YouTube Video Explorer with Real-Time Search & Live Interaction",
    date: "Feb 2024",
    stack: ["React.js", "Redux", "YouTube API", "Tailwind CSS"],
    demo: "https://youtube-video-explorer-ochre.vercel.app/",
    source: "https://github.com/Shubhamb13/youtube-video-explorer",
    description:
      "Built a high-performance video exploration platform enabling real-time search across 1,000+ videos using debouncing and caching, reducing API calls by ~40%. Implemented infinite scrolling and live chat functionality, handling 500+ concurrent interactions through seamless content loading and optimized state management.",
    metrics: [
      { value: "~40%", label: "fewer API calls" },
      { value: "500+", label: "live chat interactions" },
      { value: "+35%", label: "user engagement" },
    ],
  },
  {
    title: "AI-Powered Movie Recommendation Platform with Smart Search",
    date: "Jul 2023",
    stack: ["React.js", "Redux Toolkit", "TMDB API", "Tailwind CSS"],
    demo: "https://nextflix-gemini-ai.vercel.app/",
    source: "https://github.com/Shubhamb13/nextflix-gemini-ai",
    description:
      "Developed a Netflix-style application delivering AI-powered recommendations for 1,000+ movies, improving content discovery efficiency by ~40% through intelligent API-driven suggestions. Implemented optimized search and state management handling 50+ API requests per session, reducing redundant calls by ~35%.",
    metrics: [
      { value: "1000+", label: "movies explored" },
      { value: "+40%", label: "discovery efficiency" },
      { value: "~35%", label: "fewer redundant calls" },
    ],
  },
  {
    title: "Dynamic Image Search Platform with Real-Time Results Rendering",
    date: "Jan 2023",
    stack: ["React.js", "Unsplash/REST API", "CSS"],
    description:
      "Real-time search rendering across 500+ images per query (+30% search speed); optimized data fetching for 20+ API calls per session (reduced load time by ~25%).",
    metrics: [
      { value: "500+", label: "images per query" },
      { value: "+30%", label: "search speed" },
      { value: "~25%", label: "reduced load time" },
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "C/C++", "Python (Basics)"],
  },
  {
    group: "Frontend",
    icon: "layout",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI Design",
    ],
  },
  {
    group: "CMS & Web Builders",
    icon: "layout",
    items: [
      "WordPress (Custom Themes)",
      "Elementor",
      "WooCommerce",
      "Site Speed Optimization",
      "Plugin Configuration",
    ],
  },
  {
    group: "Backend & APIs",
    icon: "server",
    items: ["Node.js", "Express.js", "RESTful API Development"],
  },
  {
    group: "Databases",
    icon: "database",
    items: ["MySQL", "MongoDB", "Firebase (Basics)", "Redis (Fundamentals)"],
  },
  {
    group: "Frameworks & Libraries",
    icon: "code",
    items: ["Redux", "Pandas (Basics)", "NumPy (Basics)"],
  },
  {
    group: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "AWS (Fundamentals)",
      "Microsoft Azure (Basics)",
      "Docker (Containerization)",
      "CI/CD with GitHub Actions",
    ],
  },
  {
    group: "Tools",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Linux/Unix Environment",
    ],
  },
  {
    group: "Core Concepts",
    icon: "book",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "OS",
      "Computer Networks",
    ],
  },
];

export const certifications = [
  "Full Stack Development (MERN Stack)",
  "React.js — QSpiders Academy",
  "MySQL — QSpiders Academy",
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  institution: "Trinity Academy of Engineering, Pune",
  period: "Aug 2022 - Jun 2024",
};