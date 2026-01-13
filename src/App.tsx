
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
    /* Cambié bg-gray-900 por un gris muy suave para que combine con el diseño claro */
    <div className="min-h-screen bg-[#F3F4F6] dark:bg-[#0B0F14] text-[#1F2937] dark:text-gray-100 font-sans">

      <Navbar />

      {/* Hero & About Me: División de dos colores como en la imagen */}
      <main role="main" className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)] border-b border-gray-200 dark:border-white/5">

        {/* Lado Izquierdo (Sobre Mí) - Cambiado a order-last en mobile, order-first en desktop */}
        <section className="order-last lg:order-first bg-white dark:bg-white/10 flex items-center justify-center p-8 lg:p-16">
          <div className="container mx-auto">
            <AboutMe />
          </div>
        </section>

        {/* Lado Derecho (Hero) - Cambiado a order-first en mobile, order-last en desktop */}
        <section className="order-first lg:order-last bg-[#E5E7EB] dark:bg-[#0F1319] flex items-center justify-center p-8 lg:p-16 border-l border-gray-200 dark:border-white/5">
          <div className="container mx-auto">
            <HeroSection />
          </div>
        </section>

      </main>

      {/* El resto de las secciones deben seguir la misma paleta clara */}
      <div className="bg-white dark:bg-[#0B0F14]">
        <SkillsSection />
        <ProjectsSection />
        <ReferencesSection />
        <ContactContainer />
        <Footer />
      </div>
    </div>
  );
}
