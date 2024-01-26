import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ignacio Frizzera",
  initials: "IF",
  location: "Bahía Blanca, Argentina",
  locationLink: "https://www.google.com/maps/place/BahiaBlanca",
  about:
    "Software Engineer who likes to solve complex problems that provide useful solutions",
  summary:
    "Software Engineer with almost 3 years of experience. My topics of interest range from data engineering, automation, web scraping, to machine learning.",
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
        "Focusing on enhancing the performance and scalability of the previous developed product. Helping and guiding new interns with their tasks.",
    },
    {
      company: "Livepanel",
      link: "https://livepanel.ai/",
      badges: ["part-time"],
      title: "Software Developer",
      start: "2021  ",
      end: "2023",
      description:
        "Designed and developed the backend for our core AI product. This tool does the end-to-end ML process for any project, from data selection, filtering and normalization, to model selection (third-party models), training and finally the predictions. Developed in Python using Pandas, MySQL, Django, Django-Restframework and asynchronous programming tools like Django Q. At the end of 2021, started developing in the frontend aswell in Typescript and Angular.",
    },
  ],
  skills: [
    "Python",
    "Django/Django-restframework",
    "AWS: EC2",
    "AWS: S3",
    "AWS: Step-Functions",
    "AWS: Lambda Functions",
    "Pandas",
    "Linux",
    "CI/CD",
    "MySQL",
    "Typescript",
    "Angular",
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
        href: "/projects/spotify-etl",
      },
    },
  ],
} as const;
