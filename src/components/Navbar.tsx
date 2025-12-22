import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajustamos a 50px para que el cambio no sea tan abrupto
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      initial="hidden"
      animate="visible"
      variants={navVariants}
      // La clave está en la transición de colores aquí
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#241431]/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          // El logo cambia de color según el scroll si lo deseas, 
          // o se mantiene turquesa para identidad de marca
          className="text-[#2DD4BF] text-2xl font-black tracking-tighter cursor-pointer"
        >
          Nico<span className={isScrolled ? "text-white" : "text-[#241431]"}>Dev</span>
        </motion.h1>

        <div className="hidden md:flex space-x-8 items-center text-sm font-bold uppercase tracking-widest">
          {[
            { name: t("navbar.home"), href: "#home" },
            { name: t("navbar.projects"), href: "#projects" },
            { name: t("navbar.contact"), href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Si no hay scroll, el texto es oscuro para que se vea sobre el fondo claro
              // Si hay scroll, el texto es blanco sobre el nav oscuro
              className={`relative transition-colors duration-300 group ${
                isScrolled ? "text-white/80 hover:text-[#2DD4BF]" : "text-[#241431]/70 hover:text-[#2DD4BF]"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2DD4BF] transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // El botón puede cambiar su intensidad según el scroll
            className={`px-6 py-2.5 rounded-full text-xs font-black transition-all duration-300 shadow-lg ${
              isScrolled 
                ? "bg-[#A855F7] text-white shadow-purple-500/20" 
                : "bg-[#241431] text-white shadow-black/10"
            }`}
          >
            {t("navbar.about")}
          </motion.a>
        </div>

        <div className="flex items-center gap-4">
          <div className={`p-1 rounded-xl transition-all duration-300 border ${
            isScrolled ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
          }`}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;