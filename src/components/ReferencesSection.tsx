import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

// 1. Variantes para el contenedor (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 2. Variantes para el encabezado
const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// 3. Variantes para las tarjetas individuales
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ReferencesSection = () => {
  const { t } = useTranslation();

  // Obtenemos el array directamente del archivo de traducción
  // t(..., { returnObjects: true }) es clave para obtener arrays/objetos
  const referencesData = t("references.reference", { returnObjects: true }) as Array<{
    name: string;
    position: string;
    quote: string;
  }>;

  // URLs y Fotos (que no cambian por idioma)
  const extraInfo = [
    { id: 1, linkedin: "https://www.linkedin.com/in/jonathan-padin-5a31a0177/", img: "/avatar1.png" },
    { id: 2, linkedin: "https://linkedin.com/in/perfil2", img: "/avatar2.png" },
    { id: 3, linkedin: "https://www.linkedin.com/in/andrea-guinder/", img: "/avatar2.png" },
  ];

  return (
    <section id="referencias" className="bg-[#f8f9fa] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariants} className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F1D2B] mb-4 flex items-center">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-[#A855F7] text-white rounded-2xl mr-5 shadow-lg shadow-purple-500/20">
              <FontAwesomeIcon icon={faComments} />
            </motion.div>
            {t("references.title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-medium italic">
            {t("references.tagline")}
          </p>
        </motion.div>

        <motion.div className="grid gap-8 lg:grid-cols-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {/* Mapeamos los datos que vienen del JSON */}
          {Array.isArray(referencesData) && referencesData.map((ref, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col relative">
              <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-8 right-8 text-[#2DD4BF] opacity-10 text-4xl" />

              <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">
                "{ref.quote}"
              </p>

              <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gray-200 mr-4 overflow-hidden border-2 border-[#2DD4BF]">
                    <img src={extraInfo[index]?.img} alt={ref.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1D2B] text-lg">{ref.name}</h4>
                    <p className="text-[#A855F7] font-semibold text-sm">{ref.position}</p>
                  </div>
                </div>

                <motion.a 
                  whileHover={{ scale: 1.2, color: "#0077B5" }}
                  href={extraInfo[index]?.linkedin}
                  target="_blank"
                  className="text-gray-400 text-2xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ReferencesSection;