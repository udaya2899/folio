export const METADATA = {
  title: "Portfolio | Udaya Prakash N",
  description:
    "I love thinking in scale solving problems in a distributed environment. I am a simple Software Engineer who just loves to code.",
  siteUrl: "https://udaya.dev",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design scalable systems.",
  "I write clean, maintainable code.",
  "I love solving problems."
];

export const EMAIL = "udayaprakash2899@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/udaya2899/",
  github: "https://github.com/udaya2899",
  twitter: "https://twitter.com/udaya2899",
};

export const PROJECTS = [
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.myokr.co/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.dltlabs.com/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "ngx-quill-upload",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.npmjs.com/package/ngx-quill-upload",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://www.huminos.com/",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "Alpha Aesthetics",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "https://alpha-aesthetics.ayushsingh.net/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Amantrya - Polling Web App",
    image: "/projects/farewell18.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Dark mode dated from 2017 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://farewell18.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "AKGEC - College Website",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.akgec.ac.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "BDC 2018 Web Portal",
    image: "/projects/bdc18.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#470700", "#712A23"],
    url: "https://bdc2018.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Scrolls 2017 - Website",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://scrolls-17.ayushsingh.net/",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Cardize - Visiting Cards",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "First web project! Custom visiting card generator",
    gradient: ["#552A04", "#614023"],
    url: "https://cardize.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export const TIMELINE: TimelineNode[] = [
  {
    content: "2021",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "UI Engineer (Current)",
      description: "Working on flipkart wholesale platform 😎",
      logo: "flipkart",
    },
    branch: 1,
    type: "checkpoint",
  },
  {
    content: "2020",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "UI Engineer (freelance)",
      description:
        "Building solutions for employee engagement, productivity and performance 🎯",
      logo: "huminos",
    },
    branch: 2,
    type: "checkpoint",
    diverge: true,
  },
  {
    content: {
      title: "Motion Graphics (freelance)",
      description: "Motion Graphics content for Product Launch 🚀",
      logo: "octanner",
    },
    branch: 1,
    type: "checkpoint",
    converge: true,
    parallel: 2,
  },
  {
    content: "2019",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "UI Engineer",
      description:
        "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Building a design system.",
      logo: "dltlabs",
    },
    branch: 1,
    type: "checkpoint",
  },
  {
    content: {
      title: "UX Engineer",
      description:
        "First job 🥳! Product design and development for employee engagement chatbot suite for workplace by facebook",
      logo: "huminos",
    },
    branch: 1,
    type: "checkpoint",
  },
  {
    content: {
      title: "Graduated from College 🎓",
      description:
        "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
      logo: "akgec",
    },
    branch: 1,
    type: "checkpoint",
  },
  {
    content: "2018",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "Student lead at SDC-SI",
      description:
        "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
      logo: "si",
    },
    branch: 1,
    type: "checkpoint",
    diverge: true,
  },
  {
    content: {
      title: "Lecture on SVG animations",
      description:
        "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",
    },
    branch: 1,
    type: "checkpoint",
    parallel: 2,
  },
  {
    content: "2017",
    branch: 2,
    type: "year",
  },
  {
    content: {
      title: "1st position in Web Designing, IMSU",
      description:
        "Competed against 20+ teams for design and development of web project from scratch",
    },
    branch: 2,
    type: "checkpoint",
    parallel: 1,
  },
  {
    content: {
      title: "Lecture on Javascript",
      description:
        "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    },
    branch: 1,
    type: "checkpoint",
    parallel: 2,
  },
  {
    content: {
      title: "1st position in Web Design, ABES ACM",
      description:
        "Competed in web and graphic design challenge with 100+ participants.",
    },
    branch: 2,
    type: "checkpoint",
    parallel: 1,
  },
  {
    content: {
      title: "Lecture on Web Technologies",
      description:
        "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    },
    branch: 1,
    type: "checkpoint",
    parallel: 2,
  },
  {
    content: "2016",
    branch: 2,
    type: "year",
  },
  {
    content: {
      title: "1st position in Web Designing, IMSU",
      description:
        "Secured 1st prize in Web design challenge against 50+ teams",
    },
    branch: 2,
    type: "checkpoint",
    converge: true,
  },
  {
    content: "",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "UI/UX, Frontend Engineer",
      description:
        "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
      logo: "si",
    },
    branch: 1,
    type: "checkpoint",
  },
  {
    content: "2014",
    branch: 1,
    type: "year",
  },
  {
    content: {
      title: "Recognized Themer",
      description:
        "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
      logo: "xda",
    },
    branch: 1,
    type: "checkpoint",
  },
];

export interface TimelineNode {
  content: string | TimelineContent;
  branch: 1 | 2;
  type: "year" | "checkpoint";
  converge?: boolean;
  diverge?: boolean;
  parallel?: 1 | 2;
}

export interface TimelineContent {
  title: string;
  description: string;
  logo?: string;
}

export const GTAG = "UA-163844688-1";
