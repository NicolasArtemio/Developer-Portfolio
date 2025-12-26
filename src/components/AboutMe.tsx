import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="flex flex-col items-center w-full overflow-hidden py-10">
      <div className="max-w-md w-full">
        
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
            /* Efecto de flote: sube y baja suavemente */
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* El resplandor decorativo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A855F7] to-[#2DD4BF] rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <img 
              src="/perfil.png"
              alt="Nicolás" 
              className="relative h-72 w-72 md:h-80 md:w-80 object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
            />
          </motion.div>
        </motion.div>

        {/* TEXTO: Entrada desde la izquierda al scrolear */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-[#1F1D2B] tracking-tight">
              {t("about.title")}
            </h2>
            <div className="h-2 w-16 bg-[#2DD4BF] rounded-full"></div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            {t("about.description")}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMe;