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
  tesla,
  steadyApply,
  amazon,
  blogSite,
  blogSummarizer,
  disney,
  NDEAR,
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
  // {
  //   id: "./resume/Himanshu_resume.pdf",
  //   title: "Resume",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Zensar Technologies(Pune)",
    icon: steadyApply,
    iconBg: "#383E56",
    date: "August 2022 to Present",
    points: [
      `Developed two website applications: Admin Portal and Interview Management Portal`,
      "Admin Portal: Implemented centralized authentication for streamlined access. Designed features for efficient application management and user administration.",
      `Interview Management Portal: Developed functionalities for administrators to schedule, manage interviews, and create interview panels.`,
      `Utilized Angular 14, .Net C#, and SSMS for both website applications.`,
      `Currently, working as a React Developer with Arroweye Solutions, a Zensar client based in the US.`,
    ],
  },
  {
    title: "Storyteller || Social Media Manager",
    company_name: "Hope of People Everywhere ",
    icon: steadyApply,
    iconBg: "#383E56",
    date: "April 2021 to March 2022",
    points: [
      `Hope is an NGO that works for the education of children in the orphanage.`,
      "Here I've  worked as a social media manager.",
      ` My work was to design posts, editing videos.`,
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Ablecold Logistics (Remote)",
    icon: steadyApply,
    date: "November 2021 to January 2022",
    points: [
      `Designed and developed a responsive website showcasing the company's projects and services using HTML5, CSS, JavaScript, Bootstrap, and jQuery.`,
      `Created a fully functional and visually appealing website by implementing modern design elements, ensuring an intuitive user interface.`,
      `Integrated Bootstrap and jQuery to enhance the website's responsiveness and interactivity.`,
    ],
  },
  {
    title: "HR Intern",
    company_name: "Outplacement Heroes",
    icon: steadyApply,
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
  {
    title: "Web Development Intern",
    company_name: "Verzeo Edutech",
    icon: steadyApply,
    date: "June 2020 to July 2020",
    duration: "2 months",
    location: "Remote",
    points: [
      `Main objective was to gain hands-on experience in web development and become proficient in key tech stacks such as HTML, CSS, Javascript, and NodeJs.`,
      `Completed two projects: a digital clock using HTML, CSS, and Javascript, and a comprehensive interior design website using HTML, CSS, Javascript, and NodeJs.`,
      `Significantly improved web development skills and gained practical experience in creating interactive and engaging web applications.`,
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
    name: "NDEAR Portal",
    description: `Created this winning solution with my team "VI QR Coders" during the Smart India Hackathon 2022, problem statement was given by Ministry of Education, India to help teachers/faculty of schools. Due to certain restrictions, source code and website link is not availalbe in public domain`,
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
      {
        name: "OCR (for image recognition)",
        color: "orange-text-gradient",
      },
      {
        name: "React native",
        color: "cyan-text-gradient",
      },
    ],
    image: NDEAR,
    source_code_link: "",
    website_link: "",
  },
  {
    name: "QuickReads",
    description:
      "It's an AI based application, which can summarize long articles/blogs/texts in a very short period of time. You just have to place the link of the article/blog in the provided field and you will get the summary. To do so, I have utilized one of the API provided by GPT-4. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
    ],
    image: blogSummarizer,
    source_code_link:
      "https://github.com/BlackWatch021/Blog-summarizer-OpenAI-",
    website_link: "https://blogsummarizer.netlify.app/",
  },
  {
    name: "Blog Site",
    description:
      "Made this app so that I can organize all of my blogs in a single place. It has the feature of comments, so that readers can give their insights about the blogs but to do so they have to first login. Currently the project is underway as I will be putting my blogs in some time. TILL THEN DUMMY DATA HAS BEEN USED",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: blogSite,
    source_code_link: "https://github.com/BlackWatch021/Blog-site-nextJS",
    website_link: "https://personalblognextjs.vercel.app/",
  },
  {
    name: "Disney Clone",
    description:
      "Cloned the Disney+ streaming application. Included the User Authentication feature using Google Firebase. I have made the app fully responsive for all of the major devices.",
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
        name: "Styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/BlackWatch021/Disney-clone",
    website_link: "https://himanshu-disneyplus-clone.netlify.app/",
  },

  {
    name: "Tesla Clone",
    description:
      "Cloned the TESLA electric's website. The whole application is fully responsive, so that user may get better experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/BlackWatch021/tesla-clone",
    website_link: "https://himanshu-tesla-clone.netlify.app/",
  },
  {
    name: "Amazon Clone",
    description:
      "It's amazon's clone with included features like user authentication, product selection and production summary page. Redux is used here to improve state management for the application",
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
        name: "Styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/BlackWatch021/amazon-clone",
    website_link: "https://himanshu-amazon-clone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
