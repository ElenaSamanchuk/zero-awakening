import { CreativeShell } from "@/components/creative-shell";
import { SiteChrome } from "@/components/site-chrome";
import { Hero } from "@/components/hero";
import { ScrollStory } from "@/components/scroll-story";
import { CharacterSection } from "@/components/character-section";
import { StatsSection } from "@/components/stats-section";
import { StreamersSection } from "@/components/streamers-section";
import { ScheduleSection } from "@/components/schedule-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <CreativeShell>
      <SiteChrome />
      <main>
        <Hero />
        <ScrollStory />
        <CharacterSection />
        <StatsSection />
        <StreamersSection />
        <ScheduleSection />
        <PortfolioSection />
        <CtaSection />
      </main>
      <Footer />
    </CreativeShell>
  );
}
