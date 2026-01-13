import { Github, Linkedin, ArrowRightCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      /* Cambiado: bg-transparent para que no use surface-1-dark (que es azul oscuro) en modo light */
      className="flex flex-col items-center justify-center text-[var(--text-primary)] bg-transparent mt-16 md:mt-0"
    >
      <div className="text-left font-sans space-y-4 max-w-xl">
        
        {/* Título: Eliminamos el color fijo #321a3f y usamos la variable del tema */}
        <h1
          id="hero-heading"
          className="text-5xl font-bold flex flex-wrap items-center mb-6 w-full text-center text-[var(--text-primary)]"
        >
          <span className="mr-4">{`>`}</span>
          <span>Nicolás</span>
          <span className="mx-2">|</span>
          <span>{t("hero.role")}</span>
        {/* Cursor: Now uses CSS animation class */}
        <span className="w-3 h-12 bg-[var(--text-primary)] hidden md:inline-block ml-2 animate-blink"></span>
      </h1>

        {/* Subtitle with improved contrast */}
        <p className="text-xl text-center text-[var(--text-primary)] opacity-90">
          React <span className="font-bold">+</span> NestJS{" "}
          <span className="font-bold">+</span> {t("hero.architecture")}
        </p>

        {/* Tagline with better semantic structure */}
        <p className="text-[var(--text-primary)]/60 dark:text-[var(--text-primary)]/70 text-center italic text-base">
          {t("hero.tagline")}
        </p>

        {/* Social Icons with improved accessibility */}
        <div className="flex justify-center space-x-6 pt-6">
          <a
            href="https://github.com/NicolasArtemio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all transform hover:scale-110 focus-ring rounded-md p-1"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-artemio-dume-626223371/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all transform hover:scale-110 focus-ring rounded-md p-1"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        {/* CTA Button with theme variables */}
        <div className="pt-12 flex justify-center">
          <a
            href="#projects"
            aria-label={t("hero.cta_button")}
            className="px-8 py-4 bg-[var(--accent-primary)] text-white font-extrabold rounded-xl shadow-lg shadow-[var(--accent-primary)]/20 hover:bg-[var(--accent-primary)]/90 transition-all btn-hover-lift flex items-center justify-center w-fit focus-ring"
          >
            {t("hero.cta_button")}
            <ArrowRightCircle className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
