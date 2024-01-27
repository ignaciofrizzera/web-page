import { GitHubIcon } from "@/components/icons";

export const SPOTIFY_ETL_DATA = {
    projectName: "Spotify ETL",
    projectDescription: "Spotify's music activity data ETL. For a more detailed explanation of the data being gathered and the implementation, take a look at the repo's README.",
    code: {
        link: "https://github.com/IgnacioFrizzera/music-activity-data-etl",
        icon: GitHubIcon    
    },
    projectOverview: "Basic ETL developed in Python, using Spotify's API with the Spotipy package. The data is collected three times a day: 9:30AM, 5:30PM and 23:30PM (UTC-3). The ETL runs on AWS services such as Step-Functions, Lambda Functions, and S3.",
    dataVisualization: "The data is displayed in a calendar-alike form, where each box (day) represents my most played song for that date. I thought this was more interactive and fun to see.",
    scope: "This page just displays the data for the last 8 days. I had to reduce the amount of days shown quite a bit due to the limits of the request and response bodies sizes of Next.js API routes. This could be improved by calculating the most listened song in the ETL's Load function, instead than here in the frontend, therefore not requering the entire music activity data."
} as const;