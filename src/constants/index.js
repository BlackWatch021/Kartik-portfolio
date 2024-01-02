import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  verzeo,
  zensar,
  hope,
  ablecold,
  outplacement_heros,
  crypto_app,
  netflixClone,
  tictacktoe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SDE",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Zensar Technologies(Pune)",
    icon: zensar,
    iconBg: "#383E56",
    date: "August 2022 to Present",
    points: [
      `Currently deployed as a React Front End developer in Arroweye Solutions Inc (US based project).`,
      `Developed two website applications: Admin Portal and Interview Management Portal`,
      "Admin Portal: Implemented centralized authentication for streamlined access. Designed features for efficient application management and user administration.",
      `Interview Management Portal: Developed functionalities for administrators to schedule, manage interviews, and create interview panels.`,
      `Utilized Angular 14, .Net C#, and SSMS for both website applications.`,
      `Currently, working as a React Developer with Arroweye Solutions, a Zensar client based in the US.`,
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Ablecold Logistics (Remote)",
    icon: ablecold,
    date: "November 2021 to January 2022",
    points: [
      `Designed and developed a responsive website showcasing the company's projects and services using HTML5, CSS, JavaScript, Bootstrap, and jQuery.`,
      `Created a fully functional and visually appealing website by implementing modern design elements, ensuring an intuitive user interface.`,
      `Integrated Bootstrap and jQuery to enhance the website's responsiveness and interactivity.`,
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Verzeo Edutech",
    icon: verzeo,
    date: "June 2020 to July 2020",
    duration: "2 months",
    location: "Remote",
    points: [
      `Main objective was to gain hands-on experience in web development and become proficient in key tech stacks such as HTML, CSS, Javascript, and NodeJs.`,
      `Completed two projects: a digital clock using HTML, CSS, and Javascript, and a comprehensive interior design website using HTML, CSS, Javascript, and NodeJs.`,
      `Significantly improved web development skills and gained practical experience in creating interactive and engaging web applications.`,
    ],
  },
  {
    title: "Storyteller || Social Media Manager",
    company_name: "Hope of People Everywhere ",
    icon: hope,
    iconBg: "#383E56",
    date: "April 2021 to March 2022",
    points: [
      `Hope is an NGO that works for the education of children in the orphanage.`,
      "Here I've  worked as a social media manager.",
      ` My work was to design posts, editing videos.`,
    ],
  },

  {
    title: "HR Intern",
    company_name: "Outplacement Heroes",
    icon: outplacement_heros,
    date: "June 2021 to July 2021",
    duration: "2 months",
    location: "Remote",
    points: [
      `Responsible for specific tasks assigned in the HR department.`,
      `Engaged in resume screening, reviewing resumes to identify qualified candidates.`,
      `Assisted job seekers by providing relevant job links based on criteria set by the senior intern.`,
      `Gained practical understanding of HR processes and the role of an HR professional.`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto App",
    description: `Developed a React.js-based crypto app with Chakra UI, utilizing the Coingecko Crypto API to fetch comprehensive data on various cryptocurrencies and exchanges. Implemented interactive charts to analyze the performance of specific cryptocurrencies, providing valuable insights for users. Integrated direct links to exchange websites, enabling seamless exploration of the crypto market within the app.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
    ],
    image: crypto_app,
    source_code_link: "https://github.com/kartik1767/crypto-app",
    website_link: "",
  },
  {
    name: "Netflix Clone",
    description: `- Developed a fully functional Netflix clone using React.js, replicating the main user interface and design of the popular streaming platform. Implemented seamless integration with the TMDB API to fetch and display a wide range of movies, documentaries, series, and other content available on Netflix. Utilized React components and state management to create a dynamic user experience, allowing users to browse and search for specific titles, view detailed information.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "",
    website_link: "https://netflix-clone-kartik.netlify.app/",
  },
  {
    name: "Tic-Tac-Toe",
    description: `I've made a tic-tac-toe (noughts and crosses) board, place markers on the board, assessed if either player has won, and utilize this to reproduce two essential procedures utilizing Python.
    `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
    ],
    image: tictacktoe,
    source_code_link: "https://github.com/kartik1767/tic-tac-toe",
    website_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
