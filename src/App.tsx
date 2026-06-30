import { Footer, Navbar, ProjectsSection, SkillsSection } from "./components";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ReferencesSection from "./components/ReferencesSection";
import ContactContainer from "./components/ContactContainer";
import WaveCanvas from "./components/ui/WaveCanvas";
import { Toaster } from "./components/ui/Toaster";
import { SkipLink } from "./components/ui/SkipLink";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">
      <WaveCanvas />
      <div className="relative z-10">
        <SkipLink />
        <header>
          <Navbar />
        </header>
        <main
          id="main-content"
          className="min-h-[calc(100vh-64px)] border-b border-[var(--border-color)]"
        >
          <section
            className="flex items-center justify-center p-8 lg:p-24 min-h-[calc(100vh-64px)]"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-2xl mx-auto text-center">
              <HeroSection />
            </div>
          </section>
          <section
            className="border-t border-[var(--border-color)] p-8 lg:p-24"
            aria-labelledby="about-heading"
          >
            <div className="max-w-3xl mx-auto">
              <AboutMe />
            </div>
          </section>
        </main>
        <div className="bg-transparent">
          <section aria-labelledby="skills-heading">
            <SkillsSection />
          </section>
          <section aria-labelledby="projects-heading">
            <ProjectsSection />
          </section>
          <section aria-labelledby="references-heading">
            <ReferencesSection />
          </section>
          <section aria-labelledby="contact-heading">
            <ContactContainer />
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </div>
    </div>
  );
}
