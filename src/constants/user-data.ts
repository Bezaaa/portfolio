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

  projects: [
    {
      title: "Scalable Telegram Bot Platform",
      desc: "An interactive bot architecture serving 100k+ users with game modules (Keno, Spin & Win,Bingo). Features a modular codebase with 90% test coverage using NestJS.",
      tech: ["NestJS", "Node.js", "Telegraf", "TypeScript"],
      language: "TypeScript"
    },
    {
      title: "High-Performance Web Suite",
      desc: "Optimized web applications focusing on Core Web Vitals. Implemented code splitting, image optimization, and lazy loading strategies to reduce load times by 20%.",
      tech: ["Next.js", "React", "Redux", "Tailwind"],
      language: "TypeScript"
    },
    {
      title: "Science Museum Interactive Platform",
      desc: "Designed and built a gamified educational platform currently displayed at the National Science Museum. Engages thousands of daily visitors with interactive scientific simulations and real-time quizzes.",
      tech: ["React", "TypeScript", "Framer Motion", "Node.js"], 
      language: "TypeScript"
    },
    {
      title: "Fintech Analytics Dashboard",
      desc: "Developed a high-performance frontend for a financial technology platform. Features real-time data visualization, secure transaction flows, and complex state management for financial reporting.",
      tech: ["Next.js", "Tailwind CSS", "Redux", "Chart.js"],
      language: "TypeScript"
    },
    {
      title: "Zhewu E-Commerce Architecture",
      desc: "Architected a scalable e-commerce system and a core UI component library. Reduced post-release bugs by 40% through rigorous testing protocols and standardized component usage.",
      tech: ["JavaScript", "HTML/CSS", "Jest", "CI/CD"],
      language: "JavaScript"
    }
  ]
};