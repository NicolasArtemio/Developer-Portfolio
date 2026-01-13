import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../theme/useTheme";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "refer", "contact", "about", "skills"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.25, 0.5, 0.75] },
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const navVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.nav
      role="navigation"
      aria-label={t("navbar.main_navigation")}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[var(--surface-0)]/80 backdrop-blur-xl py-3 border-b border-[var(--border-color)] shadow-lg"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-[var(--accent-primary)] text-2xl font-black tracking-tighter cursor-pointer focus-ring rounded-md p-1"
        >
          Nico<span className={isScrolled ? "text-[var(--text-primary)]" : "text-[var(--text-primary)]"}>Dev</span>
        </motion.h1>

        <div className="hidden md:flex space-x-8 items-center text-sm font-bold uppercase tracking-widest">
          {[
            { name: t("navbar.home"), href: "#home" },
            { name: t("navbar.projects"), href: "#projects" },
            { name: t("navbar.contact"), href: "#contact" },
            { name: t("navbar.refer"), href: "#refer" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-colors duration-300 group focus-ring rounded-md p-1 ${isScrolled ? "text-[var(--text-primary)]/80 hover:text-[var(--accent-primary)]" : "text-[var(--text-primary)]/70 hover:text-[var(--accent-primary)]"
                } ${activeSection === link.href.slice(1) ? "text-[var(--accent-primary)]" : ""}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full`}></span>
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent-primary)]"></span>
              )}
            </a>
          ))}

          {/* About button with theme variables */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full text-xs font-black text-white transition-all duration-300 shadow-lg focus-ring ${isScrolled
                ? "bg-[var(--accent-secondary)] shadow-[var(--accent-secondary)]/20"
                : "bg-[var(--accent-secondary)] shadow-black/10"
              }`}
          >
            {t("navbar.about")}
          </motion.a>
        </div>

        <div className="flex items-center gap-4">
          <div className={`p-1 rounded-xl transition-all duration-300 border focus-within:ring-2 focus-within:ring-[var(--accent-primary)] ${isScrolled ? "bg-[var(--surface-0)] border-[var(--border-color)]" : "bg-[var(--surface-0)] border-[var(--border-color)]"
            }`}>
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            aria-label={t(theme === "dark" ? "theme.light_mode" : "theme.dark_mode")}
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 border focus-ring ${isScrolled
                ? "bg-[var(--surface-0)] border-[var(--border-color)] text-[var(--text-primary)]"
                : "bg-[var(--surface-0)] border-[var(--border-color)] text-[var(--text-primary)]"
              } hover:scale-105 hover:bg-[var(--accent-primary)]/10`}
            title={t(theme === "dark" ? "theme.light_mode" : "theme.dark_mode")}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
