import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { ComingSoon } from "@/components/ComingSoon";

// Set to false when ready to go live
const COMING_SOON_ENABLED = true;

export default function Home() {
  return (
    <ComingSoon enabled={COMING_SOON_ENABLED}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </ComingSoon>
  );
}
