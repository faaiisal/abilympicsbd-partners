import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Media } from "@/components/Media";
import { Participants } from "@/components/Participants";
import { Partners } from "@/components/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Participants />
        <Media />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
