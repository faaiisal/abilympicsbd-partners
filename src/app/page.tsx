import { About } from "@/components/About";
import { CSID } from "@/components/CSID";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Helsinki2027 } from "@/components/Helsinki2027";
import { MetzJourney } from "@/components/MetzJourney";
import { Media } from "@/components/Media";
import { PartnerBenefits } from "@/components/PartnerBenefits";
import { PartnershipForm } from "@/components/PartnershipForm";
import { PartnershipOpportunities } from "@/components/PartnershipOpportunities";
import { Participants } from "@/components/Participants";
import { Stories } from "@/components/Stories";
import { WhyPartner } from "@/components/WhyPartner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MetzJourney />
        <Helsinki2027 />
        <Participants />
        <CSID />
        <WhyPartner />
        <PartnershipOpportunities />
        <PartnerBenefits />
        <Gallery />
        <Media />
        <Stories />
        <FAQ />
        <PartnershipForm />
      </main>
      <Footer />
    </>
  );
}
