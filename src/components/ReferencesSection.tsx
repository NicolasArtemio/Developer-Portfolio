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

  const referencesData = t("references.reference", { returnObjects: true }) as Array<{
    name: string;
    position: string;
    quote: string;
  }>;

  const extraInfo = [
    { id: 1, linkedin: "https://www.linkedin.com/in/jonathan-padin-5a31a0177/", img: "/avatar1.png" },
    { id: 2, linkedin: "https://www.linkedin.com/in/marina-brice%C3%B1o-baa9b5336/", img: "/avatar2.png" },
    { id: 3, linkedin: "https://www.linkedin.com/in/andrea-guinder/", img: "/avatar2.png" },
    { id: 4, linkedin: "https://www.linkedin.com/in/celeste-ruspil-2b8941230/", img: "/avatar3.png" },
  ];

  return (
    <section id="refer" className="section-decor bg-[var(--surface-0)] dark:bg-[var(--surface-0-dark)] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariants} className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 flex items-center">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-gradient-to-br from-[#A855F7] to-[#2DD4BF] text-white rounded-2xl mr-5 shadow-lg shadow-purple-500/20">
              <FontAwesomeIcon icon={faComments} />
            </motion.div>
            <span className="bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-gray-400 bg-clip-text text-transparent">
              {t("references.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl font-medium italic">
            {t("references.tagline")}
          </p>
        </motion.div>

        <motion.div className="grid gap-8 lg:grid-cols-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {Array.isArray(referencesData) && referencesData.map((ref, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -5 }} className="reference-card flex flex-col relative">
              <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-8 right-8 text-[#2DD4BF] opacity-10 text-4xl" />

              <p className="text-lg text-[#475569] dark:text-[var(--text-primary)] italic mb-8 leading-relaxed">
                "{ref.quote}"
              </p>

              <div className="flex items-center justify-between mt-auto border-t border-[var(--border-color)] pt-6">
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-[#1E293B] dark:text-[var(--text-primary)] text-lg">{ref.name}</h4>
                    <p className="text-[#2DD4BF] font-semibold text-sm">{ref.position}</p>
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
