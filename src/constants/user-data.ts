import { Code, Zap, Layers, GraduationCap, Award, Terminal } from "lucide-react";

export const USER_DATA = {
  name: "Bezawit Teshome Workie",
  role: "Software Engineer",
  location: "Addis Ababa, Ethiopia",
  status: "🎯 Focusing on Scalable Distributed Systems",
  resumeUrl: "https://drive.google.com/file/d/1oJ5xXhs9wXg_q-JqfihSoke46n3EvuBV/view?usp=sharing", 
  about: "I’m a Software Engineer with a strong background in Electrical & Computer Engineering, specializing in building fast, reliable, and scalable web applications. I work primarily with Next.js on the frontend and NestJS on the backend to create smooth user experiences and robust systems.I’ve improved performance across multiple products, mentored developers, and contributed to architectures supporting 100k+ users. I enjoy solving complex problems, optimizing performance, and turning ideas into production-ready solutions.",
  
skills: [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "NestJS",
  "Redux",
  "Jotai",
  "Context API",
  "System Design",
  "Redis",
  "Docker",
  "REST API Design",
  "Authentication & Authorization",
  "Testing (Jest, React Testing Library)",
  "Git",
  "GitHub",
  "Agile Methodologies",
  "Scrum",
  "CI/CD",
  "Vercel",
  "GitHub Actions"
]
,
  
  social: {
    github: "https://github.com/Bezaaa", 
    linkedin: "https://www.linkedin.com/in/bezawit-teshome-194509221/", 
    email: "bezateshome1234@gmail.com",
    phone: "+251930624422"
  },
  
  experience: [
    {
      company: "A2SV",
      role: "Frontend Developer",
      date: "Present",
      logo: Code,
      bullets: [
        "Constructed high-performance web applications with Next.js, leveraging SSR and SSG to boost SEO by 30%.",
        "Optimized site speed by 25% through advanced code splitting and lazy loading strategies.",
        "Mentored 5+ junior developers, conducting code reviews that reduced revision cycles by 30%.",
        "Wrote 30+ comprehensive unit tests with Jest & React Testing Library to ensure component reliability."
      ]
    },
    {
      company: "Ablaze Laboratories",
      role: "Frontend Developer",
      date: "2023 - 2025",
      logo: Zap,
      bullets: [
        "Designed and deployed Node.js & NestJS Telegram bots serving 100K+ users, handling massive real-time traffic.",
        "Partnered with a cross-functional team of 10+ developers to deliver high-impact web apps on time.",
        "Achieved a 20% increase in user engagement through responsive, user-centric interface design.",
        "Led 20+ peer reviews to enforce clean, maintainable, and type-safe code standards."
      ]
    },
    {
      company: "Zhewu Technology",
      role: "Full Stack Developer",
      date: "2022 - 2023",
      logo: Layers,
      bullets: [
        "Architected and maintained full-stack JavaScript applications, improving performance and user satisfaction by 20%.",
        "Built a reusable UI component library (HTML/CSS/JS) that boosted development speed across platforms.",
        "Pioneered daily stand-ups and sprint retrospectives, cutting delivery delays by 25%.",
        "Resolved 50+ critical UI/UX issues to improve cross-browser compatibility."
      ]
    }
  ],


  education: [
    {
      school: "Addis Ababa Science and Technology University",
      degree: "B.Sc. in Electrical and Computer Engineering",
      date: "Graduated",
      desc: "Specialized in Electronics, Computer Systems, and Software Engineering. Built a solid foundation in low-level systems and hardware-software integration.",
      logo: GraduationCap
    },
    {
 
      school: "A2SV (Africa to Silicon Valley)",
      degree: "Data Structures & Algorithms Engineering",
      date: "2024",
      desc: "Completed 1,000+ hours of rigorous training in Data Structures, Algorithms, and software engineering best practices. Solved 500+ algorithmic problems.",
      logo: Terminal
    }
  ],

 
  certifications: [
    {
      name: "AI Mastery Training Program",
      issuer: "Kifiya / 10 Academy",
      date: "3 Months",
      desc: "Intensive project-based training covering Machine Learning Engineering, Data Engineering, and Financial Analysis for the fintech sector.",
      logo: Award,
      link: "https://drive.google.com/file/d/1ootd6GLPtWX9iL63rzj2xShzPLXooXuL/view?usp=sharing"

    }
  ],

personalProjects: [
  {
    title: "Hall of Zero Limits",
    shortDesc: "Cinematic, interactive frontend experience inspired by high-production promotional sites like Wakanda Forever.",
    desc: "Recreated a sense of depth, spatial navigation, and atmosphere without WebGL or Three.js — a pure CSS + Framer Motion challenge built to prove that cinematic experiences don't require a 3D engine.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://wakanda-site-jogc8ll54-bezateshome1234gmailcoms-projects.vercel.app/",
    repoUrl: "https://github.com/Bezaaa/Parallax_App",
  },
  {
    title: "FraudLens — AI Fraud Detection",
    shortDesc: "Real-time fraud detection dashboard powered by ML-based risk scoring and SHAP explainability.",
    desc: "Built with Next.js and a custom TypeScript ML scoring engine. Analyses 9 transaction features (device, account age, purchase value, geolocation signals) to produce a 0–100% fraud probability with per-feature SHAP impact charts.",
    tech: ["Next.js", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://fraudlens-bezaaa.vercel.app",
    repoUrl: "https://github.com/Bezaaa/fraud-dashboard",
  },
  {
    title: "HelpDesk Operations Hub",
    shortDesc: "Full-stack support ticket management system with role-based access control.",
    desc: "A professional ticketing platform with distinct Admin and User dashboards, full CRUD on support tickets, real-time URL-based filtering, password hashing with Bcrypt, and an in-app notification system for account verification.",
    tech: ["Next.js", "TypeScript", "Prisma", "Auth.js", "PostgreSQL", "Tailwind CSS", "ShadCN UI"],
    liveUrl: "https://help-desk-snowy.vercel.app/dashboard",
    repoUrl: "https://github.com/Bezaaa/help-desk",
  },
],

projects: [
   {
      title: "Scalable Telegram Bot Platform",
      shortDesc: "Interactive bot serving 100k+ users with real-time game modules.",
      tech: ["NestJS", "Node.js", "Apache Kafka", "TypeScript"], 
      isCaseStudy: true,
      details: {
        problem: "During live gaming events (Keno/Bingo), thousands of users placed bets simultaneously. The server struggled to process these synchronously, leading to lag and lost transactions.",
        solution: "I integrated **Apache Kafka** to decouple the betting traffic. I implemented the 'Producer' logic to push user commands into topics immediately, and built a separate 'Consumer' service to process game logic asynchronously in the background.",
        outcome: "Ensured zero data loss for user bets (even during crashes) due to Kafka's durability. The system comfortably handled 100k+ users with smooth response times."
      }
    },
    {
      title: "Fintech Analytics Dashboard",
      shortDesc: "Frontend dashboard for visualizing large financial datasets.",
      tech: ["Next.js", "Redux Toolkit", "Recharts", "Tailwind"],
      isCaseStudy: true,
      details: {
        problem: "The dashboard became unresponsive when loading large transaction histories (5,000+ rows), causing a poor experience for the finance team.",
        solution: "I implemented 'Virtualization' (using react-window) to only render rows currently in view. I also optimized the Redux state to prevent unnecessary re-renders when updating a single transaction status.",
        outcome: "Reduced initial page load time by 40%. The table now scrolls smoothly at 60fps even with thousands of records."
      }
    },
    {
      title: "Science Museum Interactive UI",
      shortDesc: "Gamified educational platform integrated with hardware sensors.",
      tech: ["React", "WebSockets", "Framer Motion", "TypeScript"],
      isCaseStudy: true,
      details: {
        problem: "The display needed to show real-time sensor data from the museum exhibits, but the connection would occasionally drop, freezing the UI.",
        solution: "I built a robust WebSocket integration that handles reconnection gracefully. I added a local 'store' to cache the last known data, so the screen never went blank even if the sensor connection flickered.",
        outcome: "Deployed to the National Science Museum. The system runs 24/7 with a self-healing connection mechanism."
      }
    },
    {
      title: "E-Commerce Component System",
      shortDesc: "Shared UI library for a multi-tenant e-commerce platform.",
      tech: ["React", "Storybook", "NPM", "CI/CD"],
      isCaseStudy: true,
      details: {
        problem: "We had multiple e-commerce sites (web and mobile web) that looked inconsistent. Developers were copy-pasting button styles and form logic, leading to bugs.",
        solution: "I extracted common UI elements into a centralized Component Library using React and Storybook. I enforced strict TypeScript interfaces to ensure other developers used the components correctly.",
        outcome: "Reduced UI bugs by 30%. New features can now be rolled out to all platforms simply by updating the shared library version."
      }
    },
    {
      title: "RateEat - AI Menu Platform",
      shortDesc: "SaaS platform helping restaurants digitize menus using Generative AI.",
      tech: ["Next.js", "Redux Toolkit", "AI Integration", "Tailwind"],
      isCaseStudy: true,
      details: {
        problem: "The onboarding process involved complex state (hundreds of menu items) and slow AI image generation. Waiting for the server to generate images blocked the UI, causing users to drop off.",
        solution: "I architected a global state management system using **Redux Toolkit** to handle the multi-step onboarding. I implemented an **Optimistic UI** pattern for the AI generation, allowing users to continue editing menu details while images processed asynchronously in the background.",
        outcome: "Improved perceived performance significantly. Users can now digitize full menus with zero UI blocking, leading to higher completion rates."
      }
    },
  ]
};