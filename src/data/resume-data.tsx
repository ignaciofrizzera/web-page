import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ignacio Frizzera",
  initials: "IF",
  location: "Bahía Blanca, Argentina",
  locationLink: "https://www.google.com/maps/place/BahiaBlanca",
  about:
    "Software Engineer who likes to solve complex problems that provide useful solutions",
  summary:
    "Software Engineer with almost 3 years of experience. My topics of interest range from data engineering, automation, asynchronous programming, web scraping, to machine learning.",
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
      badges: [],
      title: "Software Developer → Software Engineer",
      start: "2021",
      end: "Present",
      description:
        "TODO",
    },
  ],
  skills: [
    "Python",
    "Django/Django-restframework",
    "AWS: EC2",
    "AWS: Step-Functions",
    "AWS: Lambda Functions",
    "Pandas",
    "Linux",
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
        "AWS: S3",
        "AWS: Step-Functions",
        "AWS: Lambda-Functions",
      ],
      description: "Spotify music activity data ETL",
      link: {
        label: "Spotify ETL",
        href: "#",
      },
    },
  ],
} as const;
