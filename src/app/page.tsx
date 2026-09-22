import { About } from "@/components/About";
import { CredibilityStats } from "@/components/CredibilityStats";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetzJourney } from "@/components/MetzJourney";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStats />
        <About />
        <MetzJourney />
      </main>
    </>
  );
}
