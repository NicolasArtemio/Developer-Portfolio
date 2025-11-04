import { Github, Linkedin, ArrowDownCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // Contenedor principal: Altura mínima de pantalla, fondo oscuro, centrado.
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center font-mono space-y-4">
        {/* Cursor Animado - Usa la clase 'animate-blink' definida en el bloque <style> */}
        <h1 className=" text-4xl sm:text-6xl md:text-7xl font-bold flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-6 w-full max-w-5xl mx-auto text-center md:text-left">
          <span className="text-green-400">&gt;</span>
          <span className="text-white mx-4">Nicolás</span>
          <span className="text-green-400">| {t("hero.role")}</span>
          {/* Cursor parpadeante */}
          <span className="w-4 h-12 bg-green-400 hidden md:inline-block ml-2 animate-blink "></span>
        </h1>

        <p className="text-xl text-gray-400">
          React <span className="text-green-500">+</span> NestJS{" "}
          <span className="text-green-500">+</span> {t("hero.architecture")}
        </p>
        <p className="text-sm text-gray-500 italic">{t("hero.tagline")}</p>

        {/* Íconos Sociales (más grandes y con hover) */}
        <div className="flex justify-center space-x-6 pt-6">
          <a
            href="[URL_GITHUB]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="[URL_LINKEDIN]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        <div className="pt-12">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-green-600 text-gray-900 font-bold rounded-lg shadow-2xl shadow-green-500/50 hover:bg-green-500 transition duration-300 transform hover:translate-y-[-2px] flex items-center justify-center mx-auto w-fit"
          >
            {t("hero.cta_button")}
            <ArrowDownCircle className="w-5 h-5 ml-2" />
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
