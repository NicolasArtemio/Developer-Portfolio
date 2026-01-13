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
        <h1 className="text-5xl font-bold flex flex-wrap items-center mb-6 w-full text-center text-[var(--text-primary)]">
          <span className="mr-4">&gt;</span>
          <span>Nicolás</span>
          <span className="mx-2">|</span>
          <span>{t("hero.role")}</span>
          {/* Cursor: Ahora usa la variable de texto para cambiar de color solo */}
          <span className="w-3 h-12 bg-[var(--text-primary)] hidden md:inline-block ml-2 animate-blink"></span>
        </h1>

        {/* Subtítulo: Cambiamos text-[#321a3f] por var(--text-primary) */}
        <p className="text-xl text-center text-[var(--text-primary)] opacity-90">
          React <span className="font-bold">+</span> NestJS{" "}
          <span className="font-bold">+</span> {t("hero.architecture")}
        </p>
        
        {/* Tagline: Usamos una clase de Tailwind que respeta el modo oscuro automáticamente */}
        <p className="text-gray-600 dark:text-gray-400 text-center italic text-base">
          {t("hero.tagline")}
        </p>

        {/* Íconos Sociales: Usamos var(--text-primary) */}
        <div className="flex justify-center space-x-6 pt-6">
          <a
            href="https://github.com/NicolasArtemio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[#A855F7] transition-all transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-artemio-dume-626223371/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[#A855F7] transition-all transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        {/* Botón: Mantenemos el turquesa porque resalta en ambos modos */}
        <div className="pt-12 flex justify-center">
          <a
            href="#projects"
            aria-label="Ir a proyectos destacados"
            className="px-8 py-4 bg-[#2DD4BF] text-white font-extrabold rounded-xl shadow-lg shadow-[#2DD4BF]/20 hover:bg-[#24b3a2] transition-all transform hover:-translate-y-1 flex items-center justify-center w-fit"
          >
            {t("hero.cta_button")}
            <ArrowRightCircle className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;