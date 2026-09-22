import { About } from "@/components/About";
import { CredibilityStats } from "@/components/CredibilityStats";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Helsinki2027 } from "@/components/Helsinki2027";
import { MetzJourney } from "@/components/MetzJourney";
import { PartnershipOpportunities } from "@/components/PartnershipOpportunities";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStats />
        <About />
        <MetzJourney />
        <Helsinki2027 />
        <PartnershipOpportunities />
      </main>
    </>
  );
}
