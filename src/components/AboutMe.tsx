import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      /* bg-transparent permite que se vea el azul oscuro configurado en el body */
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-transparent text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* FOTO: Con efecto de flote infinito */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <motion.div 
            className="relative group"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <img
              src="/perfil.png"
              alt="Foto de perfil de Nicolás Dume, desarrollador fullstack"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative h-72 w-72 md:h-80 md:w-80 object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>

        {/* TEXTO: Entrada desde la izquierda */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <div className="space-y-2">
            <h2
              id="about-heading"
              className="text-5xl font-black text-[var(--text-primary)] tracking-tight"
            >
              {t("about.title")}
            </h2>
            <div className="h-2 w-16 bg-[var(--accent-primary)] rounded-full"></div>
          </div>

          <p className="text-[var(--text-primary)] text-lg leading-relaxed font-medium">
            {t("about.description")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
