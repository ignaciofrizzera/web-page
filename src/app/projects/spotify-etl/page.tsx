import { SPOTIFY_ETL_DATA } from "@/data/spotify-etl-data";
import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SPOTIFY_ETL_DATA.projectName} | ${RESUME_DATA.name}`,
  description: SPOTIFY_ETL_DATA.projectDescription,
};

export default function Component() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{SPOTIFY_ETL_DATA.projectName}</h1>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {SPOTIFY_ETL_DATA.projectDescription}
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
            <br/>
            <Section>
              <h2 className="text-xl font-bold">Project Overview</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {SPOTIFY_ETL_DATA.projectOverview}
              </p>
            </Section>
            <br/>
            <Section>
              <h2 className="text-xl font-bold">Data Visualization</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {SPOTIFY_ETL_DATA.dataVisualization}
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  )
}