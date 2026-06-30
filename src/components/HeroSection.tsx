import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-[var(--text-primary)] bg-transparent min-h-[calc(100vh-64px)] mt-16 md:mt-0"
    >
      <div className="flex flex-col items-center text-center space-y-6 max-w-xl">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-700" />
          <img
            src="/perfil.png"
            alt="Foto de perfil de Nicolás Dume"
            loading="eager"
            fetchPriority="high"
            className="h-48 w-48 object-cover rounded-[1.5rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Nombre y rol */}
        <div className="space-y-2">
          <h1
            id="hero-heading"
            className="text-5xl font-bold text-[var(--text-primary)]"
          >
            Nicolás Artemio Dume
          </h1>
          <p className="text-xl font-medium text-[var(--text-primary)] opacity-70">
            {t("hero.role")}
          </p>
        </div>

        {/* Stack */}
        <p className="text-base text-[var(--text-primary)] opacity-60">
          React · NestJS · {t("hero.architecture")}
        </p>

        {/* Tagline */}
        <p className="text-sm text-[var(--text-primary)]/50 italic">
          {t("hero.tagline")}
        </p>

        {/* Iconos sociales */}
        <div className="flex justify-center space-x-6 pt-2">
          <a
            href="https://github.com/NicolasArtemio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all transform hover:scale-110 rounded-md p-1"
          >
            <GithubLogoIcon className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/nicolas-artemio-dume-626223371/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all transform hover:scale-110 rounded-md p-1"
          >
            <LinkedinLogoIcon className="w-7 h-7" />
          </a>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-[var(--accent-primary)] text-white font-bold rounded-xl shadow-lg hover:bg-[var(--accent-primary)]/90 transition-all flex items-center gap-2"
          >
            {t("hero.cta_button")}
            <ArrowCircleRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
