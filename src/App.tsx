import { useState } from "react";
import type { Project } from "./content";
import { useTheme } from "./lib/hooks";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { CaseStudy } from "./components/CaseStudy";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Pillars } from "./components/Pillars";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";

export default function App() {
  const { theme, toggle } = useTheme();
  const [caseSlug, setCaseSlug] = useState<Project["slug"] | null>(null);

  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <Background />
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Pillars />
        <About />
        <Education />
        <Skills />
        <Projects onOpen={setCaseSlug} />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <CaseStudy slug={caseSlug} onClose={() => setCaseSlug(null)} onNavigate={setCaseSlug} />
    </div>
  );
}
