import {
  Footer,
  Navbar,
  ProjectsSection,
  SkillsSection,
} from "./components";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ReferencesSection from "./components/ReferencesSection";
import ContactContainer from "./components/ContactContainer";
import { Toaster } from "./components/ui/Toaster";
import { SkipLink } from "./components/ui/SkipLink";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">
      <SkipLink />

      <header>
        <Navbar />
      </header>

      <main id="main-content" className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)] border-b border-[var(--border-color)]">
        {/* Hero Section */}
        <section
          className="order-first lg:order-last bg-transparent flex items-center justify-center p-8 lg:p-16 border-l border-[var(--border-color)]"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto">
            <HeroSection />
          </div>
        </section>

        {/* About Section */}
        <section
          className="order-last lg:order-first bg-transparent flex items-center justify-center p-8 lg:p-16"
          aria-labelledby="about-heading"
        >
          <div className="container mx-auto">
            <AboutMe />
          </div>
        </section>
      </main>

      {/* Additional Sections */}
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
  );
}
