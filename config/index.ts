type Project = {
  title: string;
  description: string;
  href: string;
  github?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  //contact is included in the navigation by contact-form.tsx
];

export const PROJECTS: Project[] = [
  {
    title: "DigitalHippo",
    description:
      "Marketplace for digital products. You can buy and sell your own digital products.",
    href: "https://github.com/Rayyks/digital-mart",
    github: "https://github.com/Rayyks/digital-mart",
    image: "/projects/mart.jpg",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "shadcn/ui",
      "nodemailer",
      "Clerk",
    ],
    featured: true,
  },
  {
    title: "DSCourse",
    description:
      "A platform for students and teachers to share their knowledge.",
    href: "https://github.com/Rayyks/DSCourse",
    github: "https://github.com/Rayyks/DSCourse",
    image: "/projects/course.jpg",
    tags: [
      "Next.js 14",
      "Tailwind CSS",
      "Convex",
      "shadcn/ui",
      "nodemailer",
      "Clerk",
    ],
    featured: true,
  },
  {
    title: "KAS",
    description:
      "Website for KAS , iuran payment, for reidents of tanjung teritip (FREELANCE PROJECT)",
    href: "https://github.com/Rayyks/kas",
    github: "https://github.com/Rayyks/kas",
    image: "/projects/kas.jpg",
    tags: ["Laravel", "MySql", "Tailwind CSS", "Midtrans"],
  },
  {
    title: "Clean-In",
    description:
      "Mobile application for laundry service. You can order your laundry and pay online and track your order.",
    href: "https://github.com/Rayyks/CLean-in",
    github: "https://github.com/Rayyks/CLean-in",
    image: "/projects/clean.jpg",
    tags: ["Flutter", "Dart", "Tailwind CSS", "MySql"],
  },
  {
    title: "Centra HKI",
    description:
      "Fullstack application for copyright registration for your work and get the certificate.",
    href: "https://github.com/Rayyks/last_hope_hki_ig",
    github: "https://github.com/Rayyks/last_hope_hki_ig",
    image: "/projects/hak.jpg",
    tags: ["Laravel", "MySql", "Tailwind CSS", "BootStrap"],
  },
  {
    title: "Hand Sign Detector",
    description: "Hand sign detector using mediapipe and tensorflow.js",
    href: "https://github.com/Rayyks/hand-sign-detector",
    github: "https://github.com/Rayyks/hand-sign-detector",
    image: "/projects/hand.jpg",
    tags: [
      "React.js 18",
      "Tensorflow.js",
      "Tailwind CSS",
      "React Webcam",
      "Jest",
    ],
  },
  {
    title: "Attendance Qr ",
    description: "Attendance system using qr code for college students.",
    href: "https://github.com/Rayyks/absensi-qr-mahasiswa",
    github: "https://github.com/Rayyks/absensi-qr-mahasiswa",
    image: "/projects/qr.jpg",
    tags: ["PHP", "HTML", "CSS", "MySql"],
  },
  {
    title: "Coin Info",
    description:
      "Get the latest information about your fav cryptocurrency and i create dummy nft marketplace.",
    href: "https://coininfo-df5e0.web.app/",
    github: "https://github.com./Rayyks/coin_info",
    image: "/projects/coin.jpg",
    tags: [
      "React.js",
      "Tailwind CSS",
      "SASS",
      "Firebase",
      "CoinGecko API",
      "Redux Toolkit",
      "Rechart.js",
      "React Router",
    ],
  },
  {
    title: "Go Watch",
    description:
      "Track your favorite movies and series with Go Watch and get the most popular movies.",
    href: "https://movie-rayyks.vercel.app/",
    github: "https://github.com/Rayyks/go-watch",
    image: "/projects/watch.jpg",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "TMDB API"],
  },
  {
    title: "Weather App",
    description: "Get the latest weather information in your city.",
    href: "https://weather-appss.vercel.app",
    github: "https://github.com/Rayyks/weather-app",
    image: "/projects/wet.jpg",
    tags: [
      "React.js",
      "Tailwind CSS",
      "OpenWeatherMap API",
      "GSAP",
      "Axios",
      "",
    ],
  },
];

export const FOOTER_PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/Rayyks",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/rayyand/",
  },
  {
    title: "X",
    href: "https://twitter.com/rayy__and",
  },
];

export const OTHERS = [
  {
    title: "Buy me a coffee",
    href: "https://buymeacoffee.com/rayydna14g",
  },
];

//

export const TECH_STACK = [
  {
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    title: "React",
    href: "https://reactjs.org",
  },
  {
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    title: "Figma",
    href: "https://figma.com",
  },
  {
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    title: "Wordpress",
    href: "https://wordpress.org",
  },
  {
    title: "Laravel",
    href: "https://laravel.com",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
];

export const PROJECT_STUDY1 = {
  title: "IT.GUY",
  description:
    "IT.GUY is a user-friendly web application designed to streamline the process of scheduling technical support and hardware repair services. The platform allows clients to submit detailed information about their technical issues, choose between on-site visits or device drop-offs, and track the status of their repairs in real-time.",
  href: "https://github.com/Rayyks/it-guy",
  image: "/projects/coming.gif",
  tags: [
    "React.js 19",
    "Express",
    "Tailwind CSS",
    "shadcn/ui",
    "MongoDB",
    "Figma",
  ],
};

export const PROJECT_STUDY2 = {
  title: "MyBTI",
  description:
    "This is a place where you can be trully yourself. You can share your stories, thoughts, interest, anything that you wanna let the world know. You dont have to hide behind the profile picture to secure the real you. I created this website as a part of my personal project.",
  href: "https://github.com/Rayyks/mybti",
  image: "/projects/coming.gif",
  tags: ["React.js 19", "Express", "MongoDB", "Tailwind CSS", "shadcn/ui"],
};
