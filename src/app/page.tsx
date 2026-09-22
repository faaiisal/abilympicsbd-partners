import { About } from "@/components/About";
import { CredibilityStats } from "@/components/CredibilityStats";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Helsinki2027 } from "@/components/Helsinki2027";
import { MetzJourney } from "@/components/MetzJourney";
import { Media } from "@/components/Media";
import { PartnerBenefits } from "@/components/PartnerBenefits";
import { PartnershipCTA } from "@/components/PartnershipCTA";
import { PartnershipOpportunities } from "@/components/PartnershipOpportunities";
import { Stories } from "@/components/Stories";

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
        <PartnerBenefits />
        <PartnershipCTA />
        <Gallery />
        <Media />
        <Stories />
        <FAQ />
      </main>
    </>
  );
}
