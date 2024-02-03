import { SPOTIFY_ETL_DATA } from "@/data/spotify-etl-data";
import { RESUME_DATA } from "@/data/resume-data";
import { Song } from "@/types/Song";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Calendar } from "@/components/calendar";
import { GoBack } from "@/components/ui/go-back";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SPOTIFY_ETL_DATA.projectName} | ${RESUME_DATA.name}`,
  description: SPOTIFY_ETL_DATA.projectDescription,
};

async function getSongsData(): Promise<Song[]> {
  let songs: Song[] = [];
  try {
    // i don't like how this looks
    const baseUrl = process.env.PROD_URL  ?
      `${process.env.PROD_URL }` : 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/songs/`, { cache: 'no-store' });
    if (!response.ok) { throw new Error('Failed to fetch') }; // too pythonic?
    songs = await response.json();
    console.log(songs.length);
  } catch (error) {
    console.error('Failed to fetch data from s3', error);
  }
  return songs;
}

function splitSongsByMonth(songs: Song[]): Map<number, Song[]> {
  const splitSongs = new Map<number, Song[]>(); // <Month Number, List of Songs played that month>
  songs.forEach(song => {
    const currMonth = new Date(song.playedAt).getMonth(); // 0 -> january, ...
    if (!splitSongs.has(currMonth)) {
      splitSongs.set(currMonth, []);
    }
    // we can calculate minutes listened and number of songs from here.
    const monthSongs = splitSongs.get(currMonth);
    if (monthSongs) {
      monthSongs.push(song);
    }
  });
  return splitSongs;
}

export default async function Component() {
  const songsByMonth = splitSongsByMonth(await getSongsData());
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <GoBack/>
            <h1 className="text-2xl font-bold">{SPOTIFY_ETL_DATA.projectName}</h1>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {SPOTIFY_ETL_DATA.projectDescription}
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              {SPOTIFY_ETL_DATA.code.link ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={SPOTIFY_ETL_DATA.code.link} target="_blank">
                      <SPOTIFY_ETL_DATA.code.icon className="size-4" />
                    </a>
                  </Button>
              ) : null}
            </div>
            <Section>
              <h2 className="text-xl font-bold">Project Overview</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {SPOTIFY_ETL_DATA.projectOverview}
              </p>
            </Section>
            <Section>
              <h2 className="text-xl font-bold">Data Visualization</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {SPOTIFY_ETL_DATA.dataVisualization}
              </p>
            </Section>
            <Section>
              <h2 className="text-xl font-bold">Scope</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {SPOTIFY_ETL_DATA.scope}
              </p>
            </Section>
            <Section className="scroll-mb-16">
                {Array.from(songsByMonth).map(([month, songs]) => (
                    <Calendar
                      key={month}
                      month={month}
                      data={songs}
                    />
                ))}
            </Section>
          </div>
        </div>
      </section>
    </main>
  )
}