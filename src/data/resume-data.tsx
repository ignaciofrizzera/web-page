import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ignacio Frizzera",
  initials: "IF",
  location: "Bahía Blanca, Argentina",
  locationLink: "https://www.google.com/maps/place/BahiaBlanca",
  about:
    "Software Engineer who likes to solve complex problems that provide useful solutions",
  summary:
    "Solving challenging and complex problems is what I enjoy the most about Software Engineering. With almost 3 years of experience at Livepanel, I've worked building and designing end-to-end applications. My topics of interest range from data engineering, automation, web scraping, to machine learning.",
  avatarUrl: "https://avatars.githubusercontent.com/u/42450976?v=4",
  personalWebsiteUrl: "#",
  contact: {
    email: "ignaciofrizzera@gmail.com",
    tel: "+542923444485",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/IgnacioFrizzera",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ignacio-frizzera/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Nacional del Sur",
      degree: "Software Engineering Degree",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Livepanel",
      link: "https://livepanel.ai/",
      badges: ["full-time"],
      title: "Software Engineer",
      start: "2023",
      end: "Now",
      description:
        "Currently working on the migration of Livepanel's core AI product into a SaaS platform, with active involvement in both backend and frontend. Achieved complete automation of the backend processes, reducing manual intervention to almost zero. Significantly scaled our system to handle large datasets. Migrated our asynchronous tasks from Django Q to Celery. Actively helping new interns with their tasks."
    },
    {
      company: "Livepanel",
      link: "https://livepanel.ai/",
      badges: ["part-time"],
      title: "Software Developer",
      start: "2021  ",
      end: "2023",
      description:
        "Led the backend development for what would be Livepanel's core AI product, which manages the end-to-end process for any Machine Learning project. From data selection, filtering and normalization, to model selection, training and finally their use on predictions. At the end of 2021, I started developing in the frontend as well, taking full responsibility for the project. Technologies used for backend: Python, Pandas, MySQL, Django, Django-Restframework, and asynchronous programming tools like Django Q. For the frontend I used Typescript and Angular.",
    },
  ],
  skills: [
    "Python",
    "Django/Django-restframework",
    "AWS: EC2",
    "AWS: S3",
    "AWS: Step-Functions",
    "AWS: Lambda Functions",
    "Linux",
    "CI/CD",
    "MySQL",
    "Pandas",
    "Typescript",
    "Angular",
    "Next.js"
  ],
  projects: [
    {
      title: "Spotify ETL",
      techStack: [
        "Side Project",
        "Python",
        "Data",
        "AWS: S3",
        "AWS: Step-Functions",
        "AWS: Lambda-Functions",
      ],
      description: "Spotify music activity data ETL",
      link: {
        label: "Spotify ETL",
        href: "https://github.com/IgnacioFrizzera/music-activity-data-etl",
      },
    },
    {
      title: "Music Visualization",
      techStack: [
        "Side Project",
        "Typescript",
        "Data",
        "Next.js",
        "AWS: S3",
      ],
      description: "Displays data provided by an ETL in a calendar-alike form",
      link: {
        label: "Music Visualization",
        href: "/projects/spotify-etl",
      },
    },
  ],
} as const;
