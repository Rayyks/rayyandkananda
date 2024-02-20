import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import DM from "@/public/images/digital.webp";
import RIZZ from "@/public/images/socialrizz.webp";
import DSC from "@/public/images/course.webp";
import Coin from "@/public/images/coin.webp";
import Clean from "@/public/images/clean.jpg";
import Watch from "@/public/images/go-watch.webp";
import HKI from "@/public/images/hki.webp";
import Weather from "@/public/images/weatcher.webp";
import QR from "@/public/images/QR.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const educationsData = [
  {
    title: "Apple Developer Academy",
    location: "IT Devs, Batam",
    description:
      "I decided to join the apple developer academy to open up a great opportunity to become a developer who makes an impact on others, and here I met a team that supports each other.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2025",
  },
  {
    title: "Politeknik Negeri Batam",
    location: "Software Engineering, Batam",
    description:
      "I am currently pursuing a Diploma in Software Engineering at Politeknik Negeri Batam. In addition, I am working on many projects at university, where I collaborate with a team and learn new skills and technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Paused due to Apple Developer Academy",
  },
  {
    title: "Multistudi High School",
    location: "Software Engineering, Batam",
    description:
      "Completed grade at Multistudi High School with a strong foundation in software engineering, including a deep understanding of software development principles, algorithms, and their applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
];

export const experiencesData = [
  {
    title: "Web Designer (Part Time)",
    location: "PT. Amanah Inti Utama, Batam",
    description:
      "Revamped the web application's UI/UX by optimizing responsiveness and design as a web designer",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
    techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "IT Support Officer & IT Analyst",
    location: "PT. Panca Teknologi Nusantara, Batam",
    description:
      "Provides technical assistance to end-users, Analyzes and improves IT systems, Designs solutions for efficiency and collaborates on system enhancements.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023 ",
  },
  {
    title: "Front-End Developer",
    location: "PT. Panca Teknologi Nusantara, Batam",
    description:
      "Working on the frontend of the web application using React.js, integrating APIs, and optimizing performance.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
    techs: ["React", "Tailwind", "Framer", "MySql", "PHP"],
  },
] as const;

export const projectsData = [
  {
    title: "QuantumByte Core (QBC)",
    completed: false,
    description:
      "QBC - Make your dream custom PC style comes true with QuantumByte Core. 🧑🏻‍💻",
    tags: ["React", "Laravel", "MySql", "Tailwind", "PhpMyAdmin"],
    imageUrl: RIZZ,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/QBC-Corp",
  },
  {
    title: "Digital Store",
    completed: true,
    description: "🛍️ Digital Store: for shop. yea, that's it",
    tags: ["Next.js", "MonggoDb", "Tailwind", "TRPC", "Stripe", "Payload"],
    imageUrl: DM,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/digital-mart",
  },
  {
    title: "DSC (Udemy Clone)",
    completed: true,
    description: "🌐 DSC: Learning 😊",
    tags: ["Next.js", "MySql", "Tailwind", "Prisma", "Stripe", "Mux", "Clerk"],
    imageUrl: DSC,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/DSCourse",
  },
  {
    title: "CoinInfo",
    completed: true,
    description:
      "Coin Info: Web app for crypto and NFTs. View graphs, add to cart after login/signup.🪙💰",
    tags: ["React", "Firebase", "Recharts", "Tailwind"],
    imageUrl: Coin,
    demoUrl: "https://coininfo-df5e0.web.app/",
    codeUrl: "https://github.com/Rayyks/Coin_Info",
  },
  {
    title: "Clean.In",
    completed: true,
    description:
      "Simplify laundry with our Mobile App! Streamline your routine, say goodbye to hassles, and embrace convenience. 🧺📱",
    tags: ["Flutter", "Dart", "MySql", "Laravel"],
    imageUrl: Clean,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/CLean-In",
  },
  {
    title: "Qr code attendance",
    completed: true,
    description:
      "Student attendance application using qr code to facilitate the attendance process.📅✅",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySql"],
    imageUrl: QR,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/absensi-qr-mahasiswa",
  },
  {
    title: "Go Watch",
    completed: true,
    description:
      "Built a movie app with React JS: search, view details, check ratings. Save favorites using browser's local memory. 🎬🔍🌟",
    tags: ["React", "SCSS", "IMDB API"],
    imageUrl: Watch,
    demoUrl: "https://movie-rayyks.vercel.app/",
    codeUrl: "https://github.com/Rayyks/go-watch",
  },
  {
    title: "Sentra HKI",
    completed: true,
    description:
      "Sentra HKI Web App: Effortless copyright services for artists. Create, secure, manage intellectual assets. Register/login for submissions. 🎨📝🔐",
    tags: ["Laravel", "MySQL", "Tailwind", "React"],
    imageUrl: HKI,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/last_hope_hki_ig",
  },
  {
    title: "My Weather",
    completed: true,
    description:
      "Just useless project tbh, and yeah. This just for seing a weather from all location in this world🌍☁️",
    tags: ["React", "CSS", "Open Weather API"],
    imageUrl: Weather,
    demoUrl: "https://weather-appss.vercel.app/",
    codeUrl: "https://github.com/Rayyks/weather-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySql",
  "Redux",
  "Recharts",
  "Laravel",
  "Material UI",
  "PHP",
  "Framer Motion",
] as const;

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Rayyks",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rayy__dna",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Rayy__And",
    icon: FaSquareTwitter,
  },
  {
    name: "Discord",
    url: "rayyks#2567",
    icon: FaDiscord,
  },
] as const;

export const gear = [
  {
    title: "PC",
    description: "My Lovely PC",
  },
  {
    title: "Mouse",
    description: "Razer Viper Mini - Black",
  },
  {
    title: "Keyboard",
    description: "Apple Magic Keyboard & ROYAL KLUDGE RK61",
  },
  {
    title: "Headphone",
    description: "Fantech CHIEF HG15",
  },
  {
    title: "Monitor",
    description: "KOORUI 24e3 24",
  },
] as const;

export const personalSkill = [
  {
    title: "Problem Solving",
    description:
      "I am a problem solver. I can solve problems with a variety of solutions.",
  },
  {
    title: "Teamwork",
    description: "I am a team player. I can work with a team.",
  },
  {
    title: "Communication",
    description:
      "I am a good communicator. I can communicate with a variety of people.",
  },
  {
    title: "Adaptability",
    description:
      "I am adaptable. I can adapt to a variety of situations and people.",
  },
  {
    title: "Time Management",
    description: "I am good at time management. I can manage my time well",
  },
  {
    title: "analytical",
    description:
      "I am analytical. I can analyze a variety of situations and people.",
  },
  {
    title: "Leadership",
    description: "I am a good leader. I can lead a team ",
  },
  {
    title: "Creativity",
    description:
      "I am creative. I can create a variety of solutions and ideas.",
  },
] as const;
