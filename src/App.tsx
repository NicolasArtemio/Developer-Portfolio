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

export default function App() {
  return (
    /* 1. Usamos variables para que index.css controle todo el color */
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">

      <Navbar />

      {/* 2. Quitamos los colores fijos de los bordes y fondos */}
      <main role="main" className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)] border-b border-[var(--border-color)]">

        {/* Lado Izquierdo (Sobre Mí) */}
        <section className="order-last lg:order-first bg-transparent flex items-center justify-center p-8 lg:p-16">
          <div className="container mx-auto">
            <AboutMe />
          </div>
        </section>

        {/* Lado Derecho (Hero) */}
        <section className="order-first lg:order-last bg-transparent flex items-center justify-center p-8 lg:p-16 border-l border-[var(--border-color)]">
          <div className="container mx-auto">
            <HeroSection />
          </div>
        </section>

      </main>

      {/* 3. El resto de las secciones ahora heredarán el fondo del padre */}
      <div className="bg-transparent">
        <SkillsSection />
        <ProjectsSection />
        <ReferencesSection />
        <ContactContainer />
        <Footer />
      </div>
    </div>
  );
}