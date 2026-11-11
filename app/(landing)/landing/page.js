import About from "@/component/About";
import RevenueCounter from "@/component/CounterScroll";
import GoalsImpactSection from "@/component/Goalsimpactsection";
import Hero from "@/component/Heros";
import RecentProjects from "@/component/RecentProjects";
import Services from "@/component/Services";
import YouTubeHero from "@/component/YouTubeHero";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <RecentProjects />
      <YouTubeHero />
      <RevenueCounter />
      <GoalsImpactSection textureImage="/download.avif" />
    </main>
  );
}