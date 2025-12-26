import { Github, Linkedin, ArrowRightCircle } from "lucide-react"; // Cambié ArrowDown por ArrowRight
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // Se quitó el fondo oscuro y se cambió por un contenedor flexible
    <section id="home" className="flex flex-col items-center justify-center text-[#1F2937]">
      <div className="text-left font-sans space-y-4 max-w-xl">
        
        {/* Título: Cambié green-400 por purple-500 y el color de Nicolás a oscuro */}
        <h1 className="text-5xl font-bold flex flex-wrap items-center mb-6 w-full text-center">
          <span className="text-[#321a3f] mr-4">&gt;</span>
          <span className="text-[#321a3f]">Nicolás</span>
          <span className="text-[#321a3f] mx-2">|</span>
          <span className="text-[#321a3f]">{t("hero.role")}</span>
          {/* Cursor ahora es oscuro */}
          <span className="w-3 h-12 bg-[#321a3f] hidden md:inline-block ml-2 animate-blink"></span>
        </h1>

        {/* Subtítulo: Cambié verdes por el color turquesa/cian de la imagen */}
        <p className="text-xl text-center text-[#321a3f]">
          React <span className="text-[#321a3f] text-center font-bold">+</span> NestJS{" "}
          <span className="text-[#321a3f] text-center font-bold">+</span> {t("hero.architecture")}
        </p>
        <p className="text-gray-500  text-center italic text-base">{t("hero.tagline")}</p>

        {/* Íconos Sociales: Ahora en gris que cambia a morado al pasar el mouse */}
        <div className="flex justify-center space-x-6 pt-6">
          <a
            href="https://github.com/NicolasArtemio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#321a3f] hover:text-[#A855F7] transition-all transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-artemio-dume-626223371/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#321a3f] hover:text-[#A855F7] transition-all transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        {/* Botón: Cambié verde por turquesa vibrante y sombra suave */}
        <div className="pt-12 flex justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-[#2DD4BF] text-white font-extrabold rounded-xl shadow-lg shadow-[#24b3a2] hover:bg-[#24b3a2] transition-all transform hover:-translate-y-1 flex items-center justify-center w-fit"
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